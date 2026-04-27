import React from 'react'

const ProblemCard = ({icon,title, description }) => {
    return (
        <div
            className="group relative rounded-3xl p-4 sm:p-6 
                    border border-border backdrop-blur-sm 
                    flex flex-col h-auto transition-all duration-300"
            style={{
                background: `linear-gradient(
                            180deg, 
                            rgba(13, 148, 228, 0.75) 0%, 
                            rgba(249, 250, 251, 0) 20%
                            ), #1F29370D`,
            }}
        >
            <div className="relative flex flex-col h-full">
                {/* Icon */}
                <div className="mb-4 sm:mb-6 shrink-0">
                    <div>{icon}</div>
                </div>

                {/* Title */}
                <h3
                    className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 
      text-foreground transition-colors duration-300"
                >
                    {title}
                </h3>

                {/* Description */}
                <p
                    className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed 
      text-foreground transition-colors duration-300"
                >
                    {description}
                </p>
            </div>
        </div>

    )
}

export default ProblemCard

       //     <div
        //       key={problem.id}
        //       className="group relative rounded-3xl p-4 sm:p-6 
        // border border-border backdrop-blur-sm min-h-[200px] sm:min-h-[250px] lg:min-h-[300px] xl:min-h-[330px] flex flex-col"
        //       style={{
        //         background: `linear-gradient(
        //   180deg, 
        //   rgba(13, 148, 228, 0.75) 0%, 
        //   rgba(249, 250, 251, 0) 20%
        // ), #1F29370D`
        //       }}
        //     >
        //       <div className="relative flex flex-col h-full">
        //         {/* Icon */}
        //         <div className="mb-4 sm:mb-6 shrink-0">
        //           <div>{problem.icon}</div>
        //         </div>

        //         {/* Title */}
        //         <h3
        //           className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 
        //     text-foreground transition-colors duration-300 shrink-0"
        //         >
        //           {problem.title}
        //         </h3>

        //         {/* Description */}
        //         <p
        //           className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed 
        //     text-foreground transition-colors duration-300 grow"
        //         >
        //           {problem.description}
        //         </p>
        //       </div>
        //     </div>