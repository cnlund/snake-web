window.onload = () => {
    const pj = document.getElementById("personaje")
    const esfera = document.getElementById("punto")
    let pj_pos_x = 0
    let pj_pos_y = 0
    let esfera_pos_x = 0
    let esfera_pos_y = 0
    function pos_esfera(){
        esfera_pos_x = Math.floor(Math.random() * (96 - 0 + 1)) + 0
        esfera_pos_y = Math.floor(Math.random() * (95 - 0 + 1)) + 0
        esfera.style.display = 'block'
        esfera.style.top = esfera_pos_y + 'vh'
        esfera.style.left = esfera_pos_x + 'vw'
    }
    function colision_esfera(){
        for(let i = 0; i<6; i++){
            if(esfera_pos_x == pj_pos_x && esfera_pos_y == pj_pos_y){
                esfera.style.display = 'none'
                pos_esfera()
            }if(esfera_pos_x+i == pj_pos_x && esfera_pos_y == pj_pos_y){
                esfera.style.display = 'none'
                pos_esfera()
            }if(esfera_pos_x == pj_pos_x+i && esfera_pos_y == pj_pos_y){
                esfera.style.display = 'none'
                pos_esfera()
            }if(esfera_pos_x+i == pj_pos_x+i && esfera_pos_y == pj_pos_y){
                esfera.style.display = 'none'
                pos_esfera()
            }if(esfera_pos_x == pj_pos_x && esfera_pos_y+i == pj_pos_y){
                esfera.style.display = 'none'
                pos_esfera()
            }if(esfera_pos_x == pj_pos_x && esfera_pos_y == pj_pos_y+i){
                esfera.style.display = 'none'
                pos_esfera()
            }if(esfera_pos_x == pj_pos_x && esfera_pos_y+i == pj_pos_y+i){
                esfera.style.display = 'none'
                pos_esfera()
            }
        }
    }
    pos_esfera()
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
        colision_esfera()
    })
}