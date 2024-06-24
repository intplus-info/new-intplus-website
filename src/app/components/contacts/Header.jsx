import Navbar from '../Navbar';

const Header = () => {
    return (
        <div className='min-h-[600px] w-screen bg-servicesBackground bg-cover p-7 lg:px-20 lg:py-10'>
            <Navbar />
            <div className='w-full h-auto flex flex-col gap-[75px] lg:gap-4 md:items-center md:text-center md:pt-20 text-white'>
                <p className="font-light max-w-[600px] text-4xl md:text-5xl tracking-wide md:leading-[70px]">Connect & <span className='font-bold'>Collaborate :
                We&apos;re here to help</span></p>
                <p className='font-normal text-[16px] max-w-[500px]'>Communication is key. We believe in building strong partnerships with our clients. Whether you have a question, a new project, or just need some guidance, we&spos;re here to collaborate and help you achieve your goals.</p>
            </div>
        </div>
    );
};

export default Header;