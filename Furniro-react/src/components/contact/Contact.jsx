import { Given } from "../all/Given"
import { MainSection } from "../all/MainSection"

export function Contact() {
    return (
        <>
            <MainSection text={'Contacts'} />

            <section class="contacts-plain-text">
                <h2>Get In Touch With Us</h2>
                <p class="grey">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our
                    Staff Always
                    Be There To Help You Out. Do Not Hesitate!</p>
            </section>

            <section class="contacts">
                <div class="contacts-left">
                    <div class="contacts-card">
                        <div class="contact-svg">
                            <img src="/pin.svg" alt="" />
                        </div>
                        <div class="contacts-items">
                            <h3>Address</h3>
                            <p>236 5th SE Avenue, New York NY10000, United States</p>
                        </div>
                    </div>
                    <div class="contacts-card">
                        <div class="contact-svg">
                            <img src="/phone.svg" alt="" />
                        </div>
                        <div class="contacts-items">
                            <h3>Phone</h3>
                            <p>Mobile: +(84) 546-6789</p>
                            <p>Hotline: +(84) 456-6789</p>
                        </div>
                    </div>
                    <div class="contacts-card">
                        <div class="contact-svg">
                            <img src="/clock.svg" alt="" />
                        </div>
                        <div class="contacts-items">
                            <h3>Working Time</h3>
                            <p>Monday-Friday: 9:00 - 22:00</p>
                            <p>Saturday-Sunday: 9:00 - 21:00</p>
                        </div>
                    </div>
                </div>
                <div class="contacts-right">
                    <form>
                        <div>
                            <label for="name">Your name</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div class="form">
                            <label for="email">Email address</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div class="form">
                            <label for="subject">Subject</label>
                            <input type="text" id="subject" name="subject" />
                        </div>
                        <div class="form">
                            <label for="message">Message</label>
                            <textarea id="message" name="message" required></textarea>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </section>

            <Given />
        </>
    )
}