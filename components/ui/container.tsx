interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
    children
}) => {
    return (
        <div className='bg-black h-full w-full'>
            <div className="h-screen flex items-center justify-center">
                {children}
            </div>
        </div>
    );
};

export default Container;