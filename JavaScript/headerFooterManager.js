class SpecialHeader extends HTMLElement {
    connectedCallback() {
        const currentPage = window.location.pathname.split('/').pop(); // Get the current page name

        // Icons that should always be visible (accessibility icons)
        const accessibilityIcons = `
            <img src="icons/icons8-a-96.png" id="bigA" width="50" style="float:left;">
            <img src="icons/icons8-a-48.png" id="smallA" width="30" style="float:left;">
        `;

        // Booking icon, which is always present
        const contactIcon = `<a href="contact.html"><img src="icons/hacker.png" alt="photo" width="50" style="float:right;"></a>`;

        // Final HTML structure
        this.innerHTML = `
            <!-- Header Content -->
            <div class="wrapper">
                ${accessibilityIcons}
                ${contactIcon}
                <h1><center>qir0r – aka hakloi</center></h1>
                <hr width="300">
                <div class="description">
                    <p><center>Welcome to the world of programming of the future from quir0r, the master of code and digital innovation</center></p>
                </div>
            </div>
      
            <!-- Navigation Menu -->
            <nav>
                <div id="menu">
                    <ol>
                        <li class="menu-button"><a href="index.html">Home</a></li>
                        <li class="menu-button"><a href="about.html">About</a></li>
                        <li class="menu-button"><a href="projects.html">Projects</a></li>
                        <li class="menu-button"><a href="blog.html">Blog/Articles</a></li>
                        <li class="menu-button"><a href="contact.html">Contact</a></li>
                    </ol>
                </div>
            </nav>
        `;
    }
}

class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <hr>
            <div class="footer-text">
                <p><b>You can catch me here</b>:
                <br>Email: murasakitta@gmail.com
                <br>Github: <a href="https://github.com/hakloi">click me</a>
                <br>Author: hakloi
                </p>
            </div>
        </footer>
        `;
    }
}

customElements.define('special-header', SpecialHeader);
customElements.define('special-footer', SpecialFooter);
