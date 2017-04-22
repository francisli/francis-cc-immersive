$(document).ready(function() {
  // WebAudio code from: https://codepen.io/noogn/pen/LAiDz
  // Create audio (context) container
  var audioCtx = new (AudioContext || webkitAudioContext)();

  var Sound = function(frequency, type) {
      this.osc = audioCtx.createOscillator(); // Create oscillator node
      this.pressed = false; // flag to indicate if sound is playing

      /* Set default configuration for sound */
      if(typeof frequency !== 'undefined') {
          /* Set frequency. If it's not set, the default is used (440Hz) */
          this.osc.frequency.value = frequency;
      }

      /* Set waveform type. Default is actually 'sine' but triangle sounds better :) */
      this.osc.type = type || 'triangle';

      /* Start playing the sound. You won't hear it yet as the oscillator node needs to be
      piped to output (AKA your speakers). */
      this.osc.start(0);
  };

  Sound.prototype.play = function() {
      if(!this.pressed) {
          this.pressed = true;
          this.osc.connect(audioCtx.destination);
      }
  };

  Sound.prototype.stop = function() {
      this.pressed = false;
      this.osc.disconnect();
  };

  var freqs = {
    f3: 174.614,
    'f3-sharp': 184.997,
    g3: 195.998,
    'g3-sharp': 207.652,
    a3: 220.000,
    'a3-sharp': 233.082,
    b3: 246.942,
    c4: 261.626,
    'c4-sharp': 277.183,
    d4: 293.665,
    'd4-sharp': 311.127,
    e4: 329.628,
    f4: 349.228,
    'f4-sharp': 369.994,
    g4: 391.995,
    'g4-sharp': 415.305,
    a4: 440.000,
    'a4-sharp': 466.164,
    b4: 493.883,
    c5: 523.251,
    'c5-sharp': 554.365,
    d5: 587.330,
    'd5-sharp': 622.254,
    e5: 659.255,
  };

  var sounds = {};
  for (var note in freqs) {
    sounds[note] = new Sound(freqs[note]);
  }

  $('.keyboard__key').on('mouseenter', function() {
    var id = $(this).attr('id');
    var sound = sounds[id];
    sound.play();
    setTimeout(function() {
      sound.stop();
    }, 200);
  });
});
