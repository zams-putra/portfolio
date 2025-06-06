
import axios from "axios"
import { useEffect, useRef, useState } from "react"

const output = {
    "help": `
- help: for your help
- about: about me
- projects: my projects
- contacts: my social media
- fav_song: my favorite song
- echo: print something in terminal
- clear: clear your terminal
    `,
    "about": "Hello im putra, currently interest in a CySec especially CTF i was created some CTF lab also interesting in WebDev",
    "projects": "Not available in terminal feature hehe hehe",
    "contacts": (
        <>
            Lets connect
            <br />
            - <a href="https://medium.com/@sirsebasers" target="_blank" className="text-green-500">medium</a>
            <br />
            - <a href="https://instagram.com/username.gw.itu.jir" target="_blank" className="text-green-500">instagram</a>
        </>
    ),
    "fav_song": ""
}


// eslint-disable-next-line react/prop-types
export default function Terminal({ setIsTerminal }) {


    const [song, setSong] = useState({})


    const inputRef = useRef(null)

    const [commands, setCommand] = useState([])
    const [inputCmd, setInputCmd] = useState("")

    useEffect(() => {

        const getSong = async () => {
            try {
                const res = await axios.get('https://quizmaker-app-api.vercel.app/api/fav_song')
                console.log(res)
                const data = await res.data
                console.log(data)
                setSong(data)
            } catch (err) {
                console.log(err)
            }
        }


        getSong()
    }, [])

    const commandHandler = (e, cmd) => {

        e.preventDefault()
        const objc = {
            in: inputCmd,
            out: ""
        }

        const arr = cmd.split(" ")

        if (arr[0] == "exit") {
            return setIsTerminal(false)
        } else if (arr[0] == "echo") {
            objc.out = arr.slice(1).join(" ")
            setCommand((prev) => [
                ...prev,
                objc
            ])
            setInputCmd("")
            return
        } else if (arr[0] == "clear") {
            setCommand([])
            setInputCmd("")
            return
        } else if (arr[0] == "fav_song") {
            objc.out = `my fav music is ${song.artist} - ${song.judul} based on spotify`
            setCommand((prev) => [
                ...prev,
                objc
            ])
            setInputCmd("")
            return
        }

        const outCmd = output[arr[0]]


        if (!outCmd) {
            objc.out = "Unknown command. Type 'help' kocak."
        } else {
            objc.out = outCmd
        }
        setCommand((prev) => [
            ...prev,
            objc
        ])

        setInputCmd("")

    }


    return (
        <main onClick={() => inputRef.current?.focus()} className="w-screen text-xs min-h-screen bg-black text-white">
            <header className="w-full h-8 justify-center flex gap-3 p-8">
                <h1 className="self-center text-lg text-slate-400">mY Terminal</h1>
            </header>


            <section className="w-full flex p-4 flex-col gap-8">
                {
                    commands.map((command, index) => {
                        return (
                            <div className="text-left" key={index}>
                                <p><span className="text-green-500">{"> "}</span>{command.in}</p>
                                <p className="whitespace-pre-wrap">{command.out}</p>
                            </div>
                        )
                    })
                }
            </section>

            <form onSubmit={(e) => commandHandler(e, inputCmd)} className="p-4">
                <span className="text-green-500">
                    <span className="text-yellow-400">user</span>
                    <span className="text-purple-400">@</span>
                    <span className="text-red-400">portofolio</span>
                    <span className="text-red-400">{"> "}</span>
                </span> <input ref={inputRef} value={inputCmd} onChange={(e) => setInputCmd(e.target.value)} className="bg-black text-white outline-none" type="text" autoFocus />
            </form>
        </main>
    )
}