import fs from 'fs';
import path from 'path';
import jsYaml from "js-yaml";
const directoryPath = './articles';
import {marked} from "marked";
function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters.charAt(randomIndex);
    }

    return randomString;
}

function clearFolder(folderPath) {
    if (!fs.existsSync(folderPath)) {
        console.log("Folder does not exist.");
        return;
    }

    const files = fs.readdirSync(folderPath);
    for (const file of files) {
        const filePath = path.join(folderPath, file);
        const fileStat = fs.statSync(filePath);

        if (fileStat.isFile()) {
            // 删除文件
            fs.unlinkSync(filePath);
        } else if (fileStat.isDirectory()) {
            // 递归清空子文件夹
            clearFolder(filePath);
            // 删除空文件夹
            fs.rmdirSync(filePath);
        }
    }
}
function parseCat(content){
    const result = jsYaml.load(content)
    if(result){
        return result
    }else{
        return false
    }
}
clearFolder('./public/articles/post/')

// Step 1: 获取目录中的文件列表
fs.readdir(directoryPath, (err, files) => {
    if (err) {
        console.error('无法读取目录:', err);
        return;
    }
    const catFiles = files.filter((file) => path.extname(file) === '.md');
    // Step 2: 获取每个文件的创建时间
    const filesWithStats = catFiles.map((file) => {
        // 现在，result是JavaScript对象，它包含XML文件的内容
        // 您可以按需访问和处理对象中的数据
        let content =  fs.readFileSync('./articles/' + file, 'utf8')
        const re = /---(.*?)---/gs
        const t = re.exec(content)
        const d = parseCat(t[1])
        content = content.replace(t[0],'')
        if(d !== false){
            const filePath = path.join(directoryPath, file);
            const fid = generateRandomString(8)
            let md = marked.use({mangle: false, headerIds: false}).parse(content)
            fs.writeFile('./public/articles/post/' + fid + '.cat', md,{}, (err) => {
                if (err) {
                    console.error('无法写入文件:', err);
                }
            })
            if(!('excerpt' in d)){
                d['excerpt'] = md.replace(/(<([^>]+)>)/ig, '').slice(0, 50) + '...'
            }
            if('date' in d){
                const date = d['date']
                d['date'] = date.getTime()
            }else{
                const date = new Date()
                d['date'] = date.getTime()
            }
            if('updated' in d){
                const date = d['updated']
                d['updated'] = date.getTime()
            }else{
                const date = new Date()
                d['updated'] = date.getTime()
            }
            d['id'] = fid
            return d
        }
    });

    // Step 3: 使用创建时间对文件列表进行排序
    filesWithStats.sort((a, b) => b.date - a.date);
    fs.writeFile('./public/articles/index.json', JSON.stringify(filesWithStats),{}, (err) => {
        if (err) {
            console.error('无法写入文件:', err);
            return;
        }
        console.log('OneCat->','文章索引已生成');
    })
});
