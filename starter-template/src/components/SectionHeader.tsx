export const SectionHeader = (
    {
        title,
        eyebrow,
        description 
    }: {
        title: string;
        eyebrow: string;
        description: string;
    }) => {
    return (
        <>
            <div className="justify-center flex">
                <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
                    {eyebrow}
                </p>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl mt-6 text-center">
                {title}
            </h2>
            <p className="text-center md:text-lg mt-4 text-white/60 max-w-md mx-auto lg:text-xl">
                {description}
            </p>
        </>
    );
};