import styles from '../styles/mail.module.css'

export default function Mail() {

    return (
        <form action="https://static.mailerlite.com/webforms/submit/t4d6z1" data-code="t4d6z1" method="post" target="_blank" id={styles.container}>
            <input aria-label="email" aria-required="true" type="email" className="form-control" data-inputmask name="fields[email]" placeholder="Email" autoComplete="email" id={styles.input} />
            <input type="hidden" name="ml-submit" defaultValue={1} />
            <button type="submit" className="primary" id={styles.button}>Subscribe</button>
        </form>
    );
}