export class SmoothScroll {

  public static scrollTo(elem) {
    const element = document.querySelector(elem);
    const bodyRect = document.body.getBoundingClientRect();
    const elemRect = element.getBoundingClientRect();
    const offset = elemRect.top - bodyRect.top;

    setTimeout(() => {
      window.scrollTo(0, offset);
    }, 0);
  }

}
