
import axios from "axios"
import { useEffect, useRef, useState } from "react"


const quotes = [
    "Aku hanyalah retakan di istana kaca ini (Lirik lagu linkin park bjir)",
    "Liminal space adalah tempatku bernafas",
    "Aku hanya menambah data baru pada otakku, itu saja.",
    "Entah mengapa nasi goreng terasa.... nasi goreng",
    "Quotes ini bisa berubah rubah kalau di refresh (bukan quotes sih ini)",
]

const sidi = [
    ",_     _",
    " |\\_,-~/",
    " / _  _ |    ,--.",
    "(  @  @ )   / ,-\\'",
    " \\  _T_/-._( (",
    " /         `.\\",
    "| _  \\ |",
    "\\ \\ ,  /      |",
    "|| | -_\\__ /",
    "((_ / `(____,-\\'",
    "    "
]

const output = {
    "help": `
- help: for your help
- whoami: who i am
- id: display user and group identity info
- about: about me
- projects: my projects
- contacts: my social media
- fav_song: my favorite song
- echo: print something in terminal
- sidi: meow cukurukuk
- neofetch: fetch this terminal
- time: what time is it
- rm: type rm -rf /* (careful it's danger)
- clear: clear your terminal
- exit: exit terminal
    `,
    "about": "Hello im putra, currently interest in a CySec especially CTF, i was created some CTF labs (boot2root and jeopardy chall), also interesting in WebDev",
    "projects": "Not available in terminal feature hehe hehe, type 'exit' for details",
    "contacts": (
        <>
            Lets connect
            <br />
            - <a href="https://medium.com/@sirsebasers" target="_blank" className="text-green-500">medium</a>
            <br />
            - <a href="https://instagram.com/username.gw.itu.jir" target="_blank" className="text-green-500">instagram</a>
        </>
    ),
    "fav_song": "",
    "sidi": sidi.join('\n'),
    "time": new Date().toLocaleTimeString() + " with date: "  + new Date().toLocaleDateString('id-ID', {
        day: 'numeric',
        month: "short",
        year: "numeric"
    }),
    "whoami": "nasgor-enjoyer",
    "neofetch": (
    <div className="flex gap-4">
        <pre className="text-yellow-400">{sidi.join('\n')}</pre>
        <div>
            <p className="text-green-500">putra@portofolio</p>
            <p>--------------</p>
            <p><span className="text-blue-400">OS:</span> Nasi-Goreng OS</p>
            <p><span className="text-blue-400">Interest:</span> CySec, WebDev, NasiGoreng</p>
            <p><span className="text-blue-400">Shell:</span> Nasgor-Terminal-v1.0</p>
            <p><span className="text-blue-400">Quotes:</span> {quotes[Math.floor(Math.random() * quotes.length)]}</p>
        </div>
    </div>
),
    "id": "uid=1000(putra) gid=1000(nasgor) groups=0(root)"

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
        } else if(cmd == "rm -rf /*") {
            objc.out = "Hayo mau ngapain, nice try nice try💀"
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
        <main onClick={() => inputRef.current?.focus()} className="w-screen text-xs min-h-screen bg-black text-slate-200">
            <header className="w-full h-8 justify-center flex gap-3 p-8">
                <h1 className="self-center text-lg text-slate-400">mY Terminal</h1>
            </header>

            <p className="p-4">Sup buddy, type {`'help'`} for command list.</p>


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
