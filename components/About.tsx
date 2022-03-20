import styles from './About.module.css';
import Image from './Image';

export default function About() {
  const now = new Date().getFullYear();
  const experience = now - 2017;
  const icoSizePx = 40;
  return (
    <div className={`container`} style={{ padding: '50px' }}>
      <div className={`row justify-content-center`}>
        <Image
          src={`/assets/me.jpeg`}
          alt={`Lukas Forst`}
          height={`300px`}
          width={`300px`}
        />
      </div>
      <div className={`row justify-content-center`} style={{
        fontSize: '3rem',
        fontWeight: 'bold'
      }}>
        Lukas Forst
      </div>
      <div className={`row`}>
        <div className={`col ${styles.socialContainer}`}>
          <a className={styles.socialButton}
             href={'https://github.com/LukasForst'}
             target={'_blank'}
             rel={'noreferrer'}
          >
            <Image
              src={'/assets/github.png'}
              height={icoSizePx}
              width={icoSizePx}
              alt={'Github icon.'}
            />
          </a>
          <a className={styles.socialButton}
             href={'mailto:lukas@forst.dev'}
          >
            <Image
              src={'/assets/email.png'}
              height={icoSizePx}
              width={icoSizePx}
              alt={'Email icon.'}
            />
          </a>
          <a className={styles.socialButton}
             href={'https://www.linkedin.com/in/lukas-forst'}
             target={'_blank'}
             rel={'noreferrer'}
          >
            <Image
              src={'/assets/ln.png'}
              height={icoSizePx}
              width={icoSizePx}
              alt={'LinkedIn icon.'}
            />
          </a>
        </div>
      </div>
      <div className={`row justify-content-evenly`}>
        <div className={`col ${styles.textBlock}`}>
          {`
          I'm a motivated and self-driven Software Engineer with in-depth knowledge of Kotlin,
          Software Architecture and passion for functional programming all the way
          from the lambda calculus through Haskell to the Kotlin & JavaScript.
          I love designing and implementing one-click DevOps and have a strong
          experience in architecture design (including PaaS, SaaS) as well as mathematical
          background ranging from group theory, data analysis, AI utilization,
          predictions to mathematical optimization. I have strong experience in software engineering,
          software architecture, client-facing, and leading projects from technical side.
          `}
        </div>
        <div className={`col ${styles.textBlock}`}>
          {`
          I'm currently pursuing a Cyber Security Master's degree at CTU, more specifically in Stratosphere Research Laboratory.
          I started my career in the Prague-based AI startup Blindspot Solutions and then moved to a cyber-security startup in
          Berlin - Wire. At the beginning of 2020, I co-founded a medical AI startup, Mild Blue,
          where I'm responsible for the products and company security.
          As of ${now}, I have ${experience} years of experience building production-ready software.
          `}
        </div>
      </div>
    </div>
  );
}
