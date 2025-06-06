import { motion } from "motion/react";


// const exps = [
//   {
//     id: 1,
//     title: "Web Dev",
//     company: "Sebus Inc",
//     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut assumenda ea necessitatibus vitae nemo dolores quod, iure tenetur saepe ipsa nesciunt sequi distinctio dolorem molestiae cumque exercitationem, corporis mollitia!",
//     duration: '1 Jan 2021 - 9 Aug 2022',
//   },
//   {
//     id: 2,
//     title: "CySec Analyst",
//     company: "Monster Inc",
//     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut assumenda ea necessitatibus vitae nemo dolores quod, iure tenetur saepe ipsa nesciunt sequi distinctio dolorem molestiae cumque exercitationem, corporis mollitia!",
//     duration: '9 Aug 2022 - 8 Des 2022',
//   }
// ]

export default function Experience() {

  // const [idClick, setIdClick] = useState(null)

  return (
    <section className="w-full min-h-screen overflow-y-hidden flex flex-col items-center gap-8 p-16">
      <motion.h1
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-2xl md:text-4xl bg-gradient-to-r from-slate-500 to-slate-200 bg-clip-text text-transparent"
      >
        My Experience

      </motion.h1>

      <p>Zero experience 😔 </p>



      {/* <div className="flex gap-2 w-full h-1/2 p-4">
        {exps.map((exp) => (
          <>
            <motion.div className="w-1/4 min-h-full bg-slate-200 text-slate-800" onClick={() => setIdClick(exp.id)}>

              <h1>{exp.title} - {exp.company}</h1>
              <small>{exp.duration}</small>

              {idClick === exp.id && (
                <p>{exp.description}</p>
              )}

            </motion.div>
          </>
        ))}
      </div> */}
    </section>
  );
}
