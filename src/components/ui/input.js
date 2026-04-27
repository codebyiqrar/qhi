import React from 'react'

const Input = ({ type, ...props }) => {
    return (
        <React.Fragment>
            {
                type === "textarea" ? (
                    <textarea
                        type={type}
                        {...props}
                        className="bg-[#1F29370D] w-full rounded-lg border border-gray-200 px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                ) : (
                    <input
                        type={type}
                        {...props}
                        className="bg-[#1F29370D] w-full rounded-lg border border-gray-200 px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                )
            }
        </React.Fragment>

    )
}

export default Input