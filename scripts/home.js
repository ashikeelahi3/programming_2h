let eidSection = document.querySelector('#eid_section')
let h2 = document.querySelector('h2')
eidSection.addEventListener('click', function(event) {
    for(let i = 0; i < 50; i++) {
        let spark = document.createElement('i');
        spark.style.top = (event.clientY - eidSection.offsetTop) + 'px'
        spark.style.left = (event.clientX - eidSection.offsetLeft) + 'px'
        let randomX = (Math.random() - 0.5) * window.innerWidth / 1.5;
        let randomY = (Math.random() - 0.5) * window.innerHeight / 1.5;
        spark.style.setProperty('--randomX', randomX + 'px')
        spark.style.setProperty('--randomY', randomY + 'px')
        
        let randomSize = Math.random() * 30 + 2
        spark.style.height = randomSize + 'px'
        spark.style.width = randomSize + 'px'
        let duration = Math.random() * 2 + 0.5;
        spark.style.animation = `eid_spark ${duration}s ease-out forwards`

        // Change color
        let colors = ["#f4034c", "#fff", "#ffeb3b", "#03a9f4"]
        let randomColor = colors[Math.floor(Math.random() * colors.length)]
        spark.style.background = randomColor
        h2.style.color = randomColor
        
        eidSection.appendChild(spark)

        setTimeout(function() {
            spark.remove();
        }, 2000)
    }
})