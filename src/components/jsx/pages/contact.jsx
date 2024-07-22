function Contact () {
    return (
        <div class="content-section">
            <h1>Contact us</h1>
            <form>
                <p class="contact-p">You can reach us via the contact form below:</p>
                <div class="message"></div>
                
                <div class="mb-2">
                    <label for="name" title="name">
                        Full name
                    </label>
                    <div>
                        <input type="text" title="name" id="name" name="name" class="input-fields" maxlength="100"/>
                        <div class="note-name"></div>                                                
                    </div>
                </div>
                <div class="mb-2">
                    <label for="email" title="email address">
                        Email
                    </label>
                    <div>                
                        <input type="email" id="email" title="email address" name="email" class="input-fields" maxlength="100"/>
                        <div class="note-email"></div>
                    </div>
                </div>
                <div class="mb-2">
                    <label for="subject" title="subject">
                        Subject
                    </label>
                    <div>
                        <input type="text" title="subject" id="subject" name="subject" class="input-fields" maxlength="100"/>
                        <div class="note-subject"></div>                                                
                    </div>
                </div>
                <div class="mb-2">
                    <label for="contact-message" title="message">
                        Message
                    </label>

                    <div>
                        <textarea class="input-fields message-field" id="contact-message" title="message" maxlength="5000" name="message"></textarea>
                    </div>
                    <div class="note-contactmessage"></div>
                </div>
                <div class="mb-2">
                    <input type="submit" title="send" name="send" value="Send" class="submit-message"/>
                </div>
            </form>
        </div>
    );
}

export default Contact;