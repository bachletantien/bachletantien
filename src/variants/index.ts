const variants = {
  title: {
    before: { y: 100, opacity: 0 },
    after: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  },
  navbar: {
    before: { opacity: 0 },
    after: { opacity: 1, transition: { duration: 0.5 } },
  },
};
export default variants;
