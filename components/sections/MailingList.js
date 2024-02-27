import MaxWidthContainer from "../layouts/MaxWidthContainer";
import styles from "@/styles/mailingList.module.scss";

const MailingList = () => {
  return (
    <div className={styles['mailing-list-container']}>
      <MaxWidthContainer>
        <h3>Join the mailing list</h3>
        <div id="mc_embed_shell">
          <div id="mc_embed_signup">
            <form  
              action="https://robbiechristmas.us21.list-manage.com/subscribe/post?u=0174404fdb7611c1671d1dac3&amp;id=ee46437445&amp;f_id=00f5fce6f0" 
              method="post" 
              id="mc-embedded-subscribe-form" 
              name="mc-embedded-subscribe-form" 
              class="validate" 
              target="_self" 
              novalidate="">
              <div id={styles["mc_embed_signup_scroll"]}>
                <div className="mc-field-group"><input placeholder="E-mail (required)" type="email" name="EMAIL" className="required email" id="mce-EMAIL" required /></div>
                <div className="mc-field-group"><input placeholder="First name" type="text" name="FNAME" className=" text" id="mce-FNAME" /></div>
                <div className="mc-field-group"><input placeholder="Last name" type="text" name="LNAME" className=" text" id="mce-LNAME" /></div>
                <div id="mce-responses" className="clear">
                  <div className="response" id="mce-error-response" style={{display: "none"}}></div>
                  <div className="response" id="mce-success-response" style={{display: "none"}}></div>
                </div>
                <div aria-hidden="true" style={{position: "absolute", left: "-5000px"}}><input type="text" name="b_0174404fdb7611c1671d1dac3_ee46437445" tabindex="-1" value="" /></div>
              </div>
              <div className="clear"><button type="submit" name="subscribe" id="mc-embedded-subscribe" className={styles['accent-button']}>SUBSCRIBE</button></div>
            </form>
          </div>
        </div>
      </MaxWidthContainer>
    </div>
  )
}

export default MailingList;