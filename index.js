window.onload = () => {
    const pj = document.getElementById("personaje")
    let pj_pos_x = 0
    let pj_pos_y = 0
    document.addEventListener("keydown", function(event) {
        switch(event.key) {
            case 'ArrowDown':
                if(pj_pos_y < 95){
                    pj_pos_y += 1
                    pj.style.top = pj_pos_y + 'vh'
                    break;
            }else{
                break;
            }
            case 'ArrowUp':
                if(pj_pos_y > 0){
                    pj_pos_y -= 1
                    pj.style.top = pj_pos_y + 'vh'
                    break;
                }else{
                    break;
                }
            case 'ArrowRight':
                if(pj_pos_x < 96){
                    pj_pos_x += 1
                    pj.style.left = pj_pos_x + 'vw'
                    break;
                }else{
                    break;
                }
            case 'ArrowLeft':
                if(pj_pos_x > 0){
                    pj_pos_x -= 1
                    pj.style.left = pj_pos_x + 'vw' 
                }         
        }
    })
}