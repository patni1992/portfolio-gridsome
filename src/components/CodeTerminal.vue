<template>
  <div class="terminal">
    <div class="terminal__header">
      <div class="terminal__btn terminal__btn--green"></div>
      <div class="terminal__btn terminal__btn--red"></div>
      <div class="terminal__btn terminal__btn--yellow"></div>
      <span class="terminal__header__center">
        🏠 Patrik_Nilsson
      </span>
    </div>
    <div class="terminal__window">
      <p class="terminal__input-text">> contactInfo</p>
      <p class="terminal__output-text">
        ["patriknilsson1992@gmail.com",
        <a
          class="terminal__output-text terminal__output-text--link "
          target="”_blank”"
          href="https://github.com/patni1992"
          >Github </a
        >]
      </p>
      <p class="terminal__input-text">> resume</p>
      <p>
        <a
          class="terminal__output-text terminal__output-text--link"
          download
          href="/patrik-nilsson-cv.pdf"
          >patriknilsson.pdf
        </a>
      </p>
      <p class="terminal__input-text">> frontendSkills</p>
      <p class="terminal__output-text">
        ["JavaScript", "Vue", "Vuex", "React", "Redux", "Sass"]
      </p>
      <p class="terminal__input-text">> backendSkills</p>
      <p class="terminal__output-text">
        ["Node", "MySQL", "MongoDB", "Php", "Laravel", "Docker"]
      </p>
      <p class="terminal__input-text">> hoursOfCoding</p>
      <p class="terminal__output-text terminal__output-text--error">
        Error Infinity
      </p>
      <p class="terminal__input-text">
        >
        <span class="terminal__blinking-cursor">&nbsp;</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$margin-left: 1.8rem;
$green-color: #2eb82e;
$red-color: #f65549;

@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.terminal {
  &__blinking-cursor {
    animation: 1s blink step-end infinite;
    padding: 0 0.3rem 0 0.3rem;
    background: $green-color;
  }

  &__input-text {
    color: $green-color;
    font-size: 1.6rem;
    padding-top: 2.2rem;
    margin-left: 0.8rem;
    @media only screen and (min-width: 768px) {
      margin-left: $margin-left;
    }
    &:last-child {
      padding-bottom: 3rem;
    }
  }

  &__output-text {
    color: #6699ff;
    font-size: 1.6rem;
    margin-left: 0.8rem;
    @media only screen and (min-width: 768px) {
      margin-left: $margin-left;
    }

    &--link {
      color: #57c1a8;
    }

    &--link:hover {
      color: darken(#57c1a8, 10%);
    }

    &--error {
      color: $red-color;
    }
  }

  &__header {
    background-color: #e2e1e3;
    height: 2rem;
    display: flex;
    align-items: center;
    vertical-align: middle;
    border-radius: 0.6rem 0.6rem 0 0;

    &__center {
      font-size: 1.2rem;
      margin: 0 auto;
      transform: translateX(-2.3rem);
      text-align: center;
    }
  }

  &__btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    margin-left: 0.9rem;

    &--red {
      background-color: #f96256;
      border: 0.1rem solid $red-color;
    }
    &--yellow {
      background-color: #fdbc3d;
      border: 0.1rem solid #ffb524;
    }
    &--green {
      background-color: #33c948;
      border: 0.1rem solid #2dbb41;
    }
  }

  &__window {
    box-shadow: 0 5rem 10rem rgba(50, 50, 93, 0.15),
      0 1.5rem 3.5rem rgba(50, 50, 93, 0.2), 0 0.5rem 1.5rem rgba(0, 0, 0, 0.12);
    background-color: #0f2a34;
    word-wrap: break-word;
  }
}
</style>
