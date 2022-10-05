class SliderCard{
    render(data2){
        return(
            `
            <li class="car">
            <img class="carimg" src="${data2.url}">
            </li>
            `
        )
    }
}

export default new SliderCard();


