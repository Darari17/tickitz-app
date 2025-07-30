export const Footer = () => {
  return (
    <>
      <footer className="flex flex-col justify-center items-center ">
        <section className="flex flex-row justify-center items-stretch bg-white px-24 py-20 w-full ">
          <div className="flex flex-col flex-1 gap-5">
            <div>
              <img src={"./footer-logo-2.svg"} alt="Footer Logo" />
            </div>
            <div className="text-balance">
              Stop waiting in line. Buy tickets conveniently, watch movies
              quietly.
            </div>
          </div>

          <div className="flex-1 flex flex-col items-baseline-last justify-between">
            <div>Explore</div>
            <div>Cinemas</div>
            <div>Movie List</div>
            <div>My Ticket</div>
            <div>Notification</div>
          </div>

          <div className="flex-1 flex flex-col items-baseline-last gap-5 justify-between">
            <div>Our Sponsor</div>
            <div>
              <img src={"./ebv-id-logo.svg"} alt="ebv.id" />
            </div>
            <div>
              <img src={"./cineone-21-logo.svg"} alt="CineOne 21" />
            </div>
            <div>
              <img src={"./hiflix-logo.svg"} alt="hiflix" />
            </div>
          </div>

          <div className="flex-1 flex flex-col items-baseline-last gap-5">
            <div className="flex-1">Follow us</div>

            <div className="flex gap-3">
              <div>
                <img src={"./facebook-logo-outline.svg"} alt="Facebook" />
              </div>
              <div>Tickitz Cinema id</div>
            </div>

            <div className="flex gap-3">
              <div>
                <img src={"./instagram-logo-outline.svg"} alt="Instagram" />
              </div>
              <div>tickitz.id</div>
            </div>

            <div className="flex gap-3">
              <div>
                <img src={"./twitter-logo-outline.svg"} alt="Twitter" />
              </div>
              <div>tickitz.id</div>
            </div>

            <div className="flex gap-3">
              <div>
                <img src={"./youtube-logo-outline.svg"} alt="Youtube" />
              </div>
              <div>Tickitz Cinema id</div>
            </div>
          </div>
        </section>
        <section class="down">
          <div>© 2020 Tickitz. All Rights Reserved.</div>
        </section>
      </footer>
    </>
  );
};
