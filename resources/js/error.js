           function createStars() {
            const starsContainer = document.getElementById('stars');
            const numStars = window.innerWidth > 768 ? 150 : 80;
            
            for (let i = 0; i < numStars; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                star.style.width = Math.random() * 3 + 1 + 'px';
                star.style.height = star.style.width;
                star.style.animationDelay = Math.random() * 3 + 's';
                star.style.animationDuration = (Math.random() * 3 + 2) + 's';
                starsContainer.appendChild(star);
            }
        }

        function launchRocket() {
            const rocket = document.getElementById('rocket');
            const homeBtn = document.getElementById('homeBtn');
            const pageTransition = document.getElementById('pageTransition');
            
            homeBtn.disabled = true;
            homeBtn.style.opacity = '0.5';
            
            if (navigator.vibrate) {
                navigator.vibrate([100, 50, 100, 50, 200]);
            }
            
            rocket.classList.add('rocket-launch');
            
            createRocketTrail();
            
            setTimeout(() => {
                pageTransition.classList.add('active');
                
                setTimeout(() => {
                    window.location.replace('/index.html'); 
                }, 1000);
            }, 1500);
        }

        function createRocketTrail() {
            const rocket = document.getElementById('rocket');
            const trail = document.createElement('div');
            trail.style.position = 'absolute';
            trail.style.width = '4px';
            trail.style.height = '100px';
            trail.style.background = 'linear-gradient(to top, transparent, #00BFFF, #fff)';
            trail.style.left = '50%';
            trail.style.top = '100%';
            trail.style.transform = 'translateX(-50%)';
            trail.style.animation = 'trailFade 2s ease-out forwards';
            trail.style.borderRadius = '50px';
            trail.style.boxShadow = '0 0 20px #00BFFF';
            
            rocket.appendChild(trail);
            
            if (!document.getElementById('trailAnimation')) {
                const style = document.createElement('style');
                style.id = 'trailAnimation';
                style.textContent = `
                    @keyframes trailFade {
                        0% { opacity: 1; height: 100px; }
                        100% { opacity: 0; height: 200px; }
                    }
                `;
                document.head.appendChild(style);
            }
        }

        function showMission() {
            const messages = [
                "🚀 Iniciando misión de rescate espacial...",
                "🛸 Escaneando coordenadas galácticas...",
                "🌟 Contacto establecido con la base ORVEX",
                "🏠 Ruta de regreso calculada exitosamente",
                "✨ ¡Misión completada! Prepárate para el viaje de vuelta"
            ];
            
            let currentMessage = 0;
            const interval = setInterval(() => {
                alert(messages[currentMessage]);
                currentMessage++;
                
                if (currentMessage >= messages.length) {
                    clearInterval(interval);
                    setTimeout(() => {
                        alert("🎯 ¡Usa el botón 'Volver a Casa' para iniciar el viaje!");
                    }, 500);
                }
            }, 1000);
        }

        function glitchEffect() {
            const errorCode = document.querySelector('.error-code');
            setInterval(() => {
                if (Math.random() < 0.1) {
                    errorCode.style.textShadow = '2px 2px 0px #ff0000, -2px -2px 0px #00ff00';
                    setTimeout(() => {
                        errorCode.style.textShadow = '0 0 50px rgba(0, 191, 255, 0.6)';
                    }, 100);
                }
            }, 2000);
        }

        document.addEventListener('DOMContentLoaded', function() {
            createStars();
            glitchEffect();
            
            setTimeout(() => {
                document.querySelector('.content').style.animation = 'floatIn 1s cubic-bezier(0.16, 1, 0.3, 1)';
            }, 300);
        });

        setInterval(() => {
            if (window.innerWidth > 768) {
                const meteor = document.createElement('div');
                meteor.className = 'meteor';
                meteor.style.top = Math.random() * 50 + '%';
                meteor.style.left = '-10px';
                meteor.style.animationDuration = (Math.random() * 3 + 5) + 's';
                document.querySelector('.space-bg').appendChild(meteor);
                
                setTimeout(() => {
                    meteor.remove();
                }, 8000);
            }
        }, 4000);
