if(window.innerWidth<319||window.innerWidth>376){
            console.error('width must be between 320px and 375px !')
        }
        function makeCard(nb) {
            return new Promise((resolve, reject) => {
                for (let i = 0; i < nb; i++) {
                    let card = document.createElement('div');
                    let img = document.createElement('div');
                    img.className = "img-card";
                    card.className = "card";
                    card.id = "card-" + i;
                    card.appendChild(img);
                    document.getElementsByClassName('card-container')[0].appendChild(card);
                }
                resolve(document.getElementsByClassName('card-container')[0]);
            });
        }
        makeCard(50).then(cardContainer => {
            var lastEL = null;
            window.addEventListener("load", e => {
                document.querySelectorAll(".card").forEach(createObserver)
            }, false);
            const createObserver = el => {
                el.addEventListener('touchend', e => {
                    e.target.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
                })
                let observer;
                let options = {
                    root: null,
                    rootMargin: "0px",
                    threshold: 1.0
                };
                observer = new IntersectionObserver((e) => {
                    if (e[0].intersectionRatio > 0 && el.childNodes[0] && el.childNodes[0].style.backgroundImage == "") {
                        el.childNodes[0].style.backgroundImage = "url('https://picsum.photos/200/300?grayscale')";
                        el.childNodes[0].style.opacity = 1;
                    }
                    if (e[0].intersectionRatio == 1) {
                        InViewEl(e[0].target)
                    } else {
                        NotInViewEl(e[0].target)
                    }
                }, options);
                observer.observe(el);
            }
            const InViewEl = el => {
                if (lastEL) {
                    lastEL.style.width = "80%";
                    // console.log("last =>" + lastEL.id + " actual => " + el.id + "");
                }
                el.style.filter = "brightness(1)";
                el.style.width = "90%";
                lastEL = el;
            }
            const NotInViewEl = el => {
                if (el.style.width !== "85%" && el.style.width !== "90%") {
                    el.style.width = "80%";
                    el.style.filter = "brightness(0.5)"
                }
            }
            cardContainer.appendChild(document.createElement('br'))
            cardContainer.appendChild(document.createElement('br'))
        })
