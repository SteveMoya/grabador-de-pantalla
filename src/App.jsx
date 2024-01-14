

function App() {
  const handleStart = async () => {
    const media = await navigator.mediaDevices.getDisplayMedia({
      video: { frameRate: { ideal: 30 } }
    })
     const mediarecorder = new MediaRecorder(media, {
    mimeType: 'video/webm;codecs=vp8,opus'
    })
    mediarecorder.start()
    const [video] = media.getVideoTracks()
    video.addEventListener("ended", () => {
      mediarecorder.stop()
    })
    mediarecorder.addEventListener("dataavailable", (e) => {
      const link = document.createElement("a")
      link.href = URL.createObjectURL(e.data)
      link.download = "captura-pantalla.webm"
      link.click()
    })
  }
  
  const handleStop = async () => {
    console.log('Parando grabación')
  }
  return (
    <>
    <div className=" w-[100vw] h-[100vh] ">
      <header>
        <div className=" h-16">
          <img className="w-[50px] h-[50px] m-auto" src="/logo.svg" alt="" />
          <h1 className="text-white text-2xl leading-4 text-center">Grabador de Pantalla</h1>
        </div>
      </header>
      <main>
        <div className="flex justify-center items-center sm:flex-row flex-col mt-8 gap-4">
          <button onClick={handleStart} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              ⏺️ Grabar pantalla
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={handleStop}>
              ⏹️ Parar grabación
          </button>
        </div>
      </main>
      <footer>
        <div className="flex justify-center items-center h-16">
          <p className="text-white">Creado por <a href="#" className="text-blue-500">Steve Moya Cepeda</a></p>
        </div>
      </footer>
      </div>
    </>
  )
}

export default App
