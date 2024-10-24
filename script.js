Vue.createApp({
  data() {
    return {
      red: 255,    // Default value for Red
      green: 209,  // Default value for Green
      blue: 24,    // Default value for Blue
    };
  },

  computed: {
    // Compute the hex color code based on the current RGB values
    hexColor() {
      const toHex = (value) => {
        // Ensure the value is between 0 and 255
        const clampedValue = Math.max(0, Math.min(255, value));
        // Convert the value to a hexadecimal string
        const hex = clampedValue.toString(16).padStart(2, '0'); // Ensure it has two digits
        return hex;
      };

      return `#${toHex(this.red)}${toHex(this.green)}${toHex(this.blue)}`;
    },

    // Compute the body background color based on the RGB values
    bodyBackgroundColor() {
      return `rgb(${this.red}, ${this.green}, ${this.blue})`;
    }
  },

  methods: {
    // Update the slider backgrounds dynamically
    updateSliderBackgrounds() {
      document.getElementById('red-value').style.background = 
        `linear-gradient(to right, var(--clr-red) 0%, var(--clr-red) ${this.red / 2.55}%, var(--clr-white) ${this.red / 2.55}%, var(--clr-white) 100%)`;
      
      document.getElementById('green-value').style.background = 
        `linear-gradient(to right, var(--clr-green) 0%, var(--clr-green) ${this.green / 2.55}%, var(--clr-white) ${this.green / 2.55}%, var(--clr-white) 100%)`;
      
      document.getElementById('blue-value').style.background = 
        `linear-gradient(to right, var(--clr-blue) 0%, var(--clr-blue) ${this.blue / 2.55}%, var(--clr-white) ${this.blue / 2.55}%, var(--clr-white) 100%)`;
      
      // Update the background color of the body
      document.body.style.backgroundColor = this.bodyBackgroundColor;
    }
  },

  mounted() {
    // Set the initial slider backgrounds when the component mounts
    this.updateSliderBackgrounds();
  }
}).mount("#app");
