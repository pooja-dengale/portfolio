export default function Footer() {
  return (
    <footer className="bg-slate-950/80 border-t border-cyan-400/10 py-7 text-center">
      <p className="text-slate-400 text-sm">
        &copy; {new Date().getFullYear()} Pooja Dengale. Crafted with{' '}
        <i className="fas fa-heart text-cyan-400 mx-1" /> and code.
      </p>
    </footer>
  )
}
