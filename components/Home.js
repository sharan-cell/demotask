import styles from '../styles/components/Home.module.css';
import greyBlob from '../assets/grey_blob.svg';
import Image from 'next/image';


function Home() {

  return (
    <div className={styles.container}>
    <div className={styles.left}>
      <div classname={styles.top}>
          <h4>Hello! there</h4>
          <h3>I am a</h3>
          <h1>Web developer</h1>

      </div>
      <div className={styles.bottom}>
        <p>I am a passionate and enthusiastic web developer, As a fresher
looking for a job of web development or software engineering.
As I dont have any industrial experience but I created some
projects while learning. I created some projects with react js
and next js and i also use sometimes node js and Firebase. with
my knowledge in this field I could serve the organization very
well if you give me a chance to prove myself. </p>
      </div>

    </div>
    <div className={styles.right}>
    <div className={styles.blob}>

    <div className={styles.typing}>
            <span>console</span>
            <span>.</span>
            <span>log</span>
            <span>&#40;</span>
            <span>&#8220;my </span>
            <span> name is </span>
            <span>Sharanu </span>
            <span>Belaki</span>
            <span>&#8221;</span>
            <span>&#41;</span>
            <span>&#x3b;</span>
    </div>
    <Image src={greyBlob} height={375} width={425} alt="greyblob"/>

    </div>
    


    </div>
    </div>
  )
}

export default Home