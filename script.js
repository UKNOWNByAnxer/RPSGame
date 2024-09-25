const gameContainer = document.querySelector(".container");
const userResult = document.querySelector(".user_result img");
const cpuResult = document.querySelector(".cpu_result img");
const cpuSpan = document.querySelector(".cpu_result");
const userSpan = document.querySelector(".user_result");
const result = document.querySelector(".result");
const optionImages = document.querySelectorAll(".option_image");

optionImages.forEach((image, i) => {
    image.addEventListener("click", (e) => {
        // Eliminar la clase 'active' de todas las imágenes y agregarla solo a la seleccionada
        optionImages.forEach((image2) => {
            image2.classList.remove("active");
        });
        image.classList.add("active");
        gameContainer.classList.add("start");
        // Establecer la imagen seleccionada por el usuario
        let imageSrc = e.target.querySelector("img").src;

        // Generar una selección aleatoria para la CPU
        let randomNumber = Math.floor(Math.random() * 3);
        let cpuImage = ["img/rock.png", "img/paper.png", "img/scissors.png"];
        
        // Determinar el valor de usuario y CPU
        let cpuValue = ["R", "P", "S"][randomNumber];
        let userValue = ["R", "P", "S"][i];

        // Determinar el resultado del juego
        let outcome = {
            RR: "Draw",
            RP: "Cpu",
            RS: "User",
            PP: "Draw",
            PR: "User",
            PS: "Cpu",
            SR: "Cpu",
            SP: "User",
            SS: "Draw"
        };

        // Cuenta regresiva con animación
        let countdown = [3, 2, 1];
        countdown.forEach((num, index) => {
            setTimeout(() => {
                result.textContent = num;
                result.classList.add("scale-animation"); // Agregar animación
                setTimeout(() => {
                    result.classList.remove("scale-animation"); // Eliminar animación
                }, 500); // Eliminar animación después de 0.5 segundos
            }, index * 1000); // 1 segundo entre cada número
        });
        // Mostrar el resultado después de la cuenta regresiva
        setTimeout(() => {
            gameContainer.classList.remove("start");
            // Cambiar las imágenes solo después de la cuenta regresiva
            userResult.src = imageSrc;
            cpuResult.src = cpuImage[randomNumber];
            // Animar imágenes
            userSpan.classList.add("scale-animation");
            cpuSpan.classList.add("scale-animation");
            // Eliminar animación después de 0.5 segundos
            setTimeout(() => {
                userSpan.classList.remove("scale-animation");
                cpuSpan.classList.remove("scale-animation");
            }, 500);
            let outComeValue = outcome[userValue + cpuValue];
            result.textContent = userValue === cpuValue ? 'Match Draw' : `${outComeValue} Won!!`;
            result.classList.add("scale-animation"); // Animar resultado final
        }, 3000); // Mostrar resultado después de 3 segundos (tras la cuenta regresiva)
        // Reset el juego
        setTimeout(() => {
            gameContainer.classList.remove("start");
            result.textContent = "Let's Play!";
            result.classList.remove("scale-animation");
            userResult.src = "img/rock.png";
            cpuResult.src = "img/rock.png";
            userSpan.classList.remove("scale-animation");
            cpuSpan.classList.remove("scale-animation");
            optionImages.forEach((image) => {
                image.classList.remove("active");
            });
        }, 5500);
    });
});
