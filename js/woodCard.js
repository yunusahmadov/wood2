class WoodCard{
    render(data1){
        return(
            `
<div class="img_cnt">
    <img src="${data1.url}" alt="First Wood">
    <h3 style=margin-left:70px>${data1.title}<h3>
        <ul>
            <li>        
                <img src="${data1.vect}" alt="First Wood">
                            ${data1.text1}
            </li>
            <li>
                <img src="${data1.vect2}" alt="First Wood">
                            ${data1.text2}
                </li>
                <li>
                <img src="${data1.vect3}" alt="">
                ${data1.text3}
                </li>
                <li>
                <img src="${data1.vect4}" alt="">
                ${data1.text4}
                </li>
            </ul>
</div>
            `
        )
    }
}

export default new WoodCard();