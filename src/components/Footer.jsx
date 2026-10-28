export default function Footer() {
  return (
    <footer className="footer" id="hours">
      <div className="container footer__inner">
        <div>
          <h4>Opening hours</h4>
          <p>Mon – Fri: 8:00 AM – 6:00 PM</p>
          <p>Saturday: 9:00 AM – 2:00 PM</p>
          <p>Sunday: Closed</p>
        </div>
        <div>
          <h4>Location</h4>
          <p>Student Centre, Ground Floor</p>
          <p>Main Campus</p>
        </div>
        <div>
          <h4>Good to know</h4>
          <p>Menu may change based on availability.</p>
          <p>Prices shown in Pakistani Rupees (Rs.).</p>
        </div>
      </div>
      <p className="footer__copy">© {new Date().getFullYear()} Campus Canteen</p>
    </footer>
  );
}
