(async () => {
    
    const clientName = "CLIENTE ORVEX 001";

    try {
        
        const config = await import("./config-wm.js");
        
        const client = config.clientScripts.find(c => c.name === clientName);

        if (!client) {
            console.warn(`No se encontró configuración para: ${clientName}`);
            return;
        }

        const clientModule = await import(client.script);

        if (clientModule.watermarkEnabled) {
            const watermark = document.createElement("div");
            watermark.innerText = clientModule.watermarkText || "Marca de Agua ORVEX";
            Object.assign(watermark.style, {
                position: "fixed",
                bottom: "10px",
                right: "10px",
                opacity: "0.3",
                fontSize: "14px",
                color: "#000",
                zIndex: "9999",
                pointerEvents: "none",
                fontFamily: "sans-serif",
                transform: "rotate(-20deg)",
                fontWeight: "bold"
            });
            document.body.appendChild(watermark);
        }
    } catch (error) {
        console.error("Error cargando la configuración de marca de agua:", error);
    }
})();
