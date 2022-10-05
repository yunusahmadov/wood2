class AboutCard{
    render(data4){
        return(
            `
            <div class="about-img">
            <img src="${data4.url}">
            </div>
            `
        )
    }
}

export default new AboutCard();