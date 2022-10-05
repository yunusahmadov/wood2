class SolidCard{
    render(data){
        return(
            `
            <div class="img_cont">
            <img src="${data.url}" alt="made">
            </div>
            `
        )
    }
}

export default new SolidCard();






