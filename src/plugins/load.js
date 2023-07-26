class Load{
    el = document.getElementById('loading')

    show(){
        this.el.style.display = 'block';
    }
    hide(){
        this.el.style.display = 'none';
    }
}

export default Load;