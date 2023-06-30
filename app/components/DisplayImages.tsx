import Image from 'next/image'


function DisplayImages(){
    return (
        <div>
            <Image
                src = '/static/IMG_1345.jpg'
                width={200}
                height={200}
                alt="Picture not found"
                />
            
        </div>
    );
}

export default DisplayImages;


export async function getStaticProps() {
    const images = [];
    


    // images.push(<Image
    //     src = '/photos/IMG_1345.jpg'
    //     width={200}
    //     height={200}
    //     alt="Picture not found"
    //     />);
    //     images.push(<Image
    //         src = '/photos/IMG_1352.jpg'
    //         width={200}
    //         height={200}
    //         alt="Picture not found"
    //         />);
    //     images.push(<Image
    //         src = '/photos/IMG_1687.jpg'
    //         width={200}
    //         height={200}
    //         alt="Picture not found"
    //     />);
    //     images.push(<Image
    //         src = '/photos/IMG_1847.jpg'
    //         width={200}
    //         height={200}
    //         alt="Picture not found"
    //         />);
    //     console.log("Loaded Images"+ images.length);
    // return{
    //     props: images
    // }
        
}
