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
    c3: 130.813,
    'c3-sharp': 138.591,
    d3: 146.832,
    'd3-sharp': 155.563,
    e3: 164.814,
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

  var music = [
    {
      note: 'c4',
      duration: 250,
    },
    {
      note: 'e4',
      duration: 250,
    },
    {
      note: 'g4',
      duration: 250,
    },
    {
      note: 'e4',
      duration: 250,
    },
    {
      note: 'c4',
      duration: 250,
    },
    {
      note: 'e4',
      duration: 125,
    },
    {
      note: 'g4',
      duration: 375,
    },
    {
      note: 'e4',
      duration: 250,
    },
    {
      note: 'a3',
      duration: 250,
    },
    {
      note: 'c4',
      duration: 250,
    },
    {
      note: 'e4',
      duration: 250,
    },
    {
      note: 'c4',
      duration: 250,
    },
    {
      note: 'a3',
      duration: 250,
    },
    {
      note: 'c4',
      duration: 125,
    },
    {
      note: 'e4',
      duration: 375,
    },
    {
      note: 'c4',
      duration: 250,
    },
    {
      note: 'g3',
      duration: 250,
    },
    {
      note: 'b3',
      duration: 250,
    },
    {
      note: 'd4',
      duration: 125,
      rest: 125
    },
    {
      note: 'b3',
      duration: 125,
    },
    {
      note: 'g3',
      duration: 250,
    },
    {
      note: 'b3',
      duration: 250,
    },
    {
      note: 'd4',
      duration: 250,
    },
    {
      note: 'b3',
      duration: 250,
      rest: 125
    },
    {
      note: 'g3',
      duration: 125,
      rest: 125
    },
    {
      note: 'g3',
      duration: 125,
      rest: 0
    },
    {
      note: 'g3',
      duration: 125,
      rest: 250
    },
    {
      note: 'g3',
      duration: 125,
      rest: 0
    },
    {
      note: 'g3',
      duration: 125,
      rest: 125
    },
    {
      note: 'g3',
      duration: 125,
      rest: 125
    },
    {
      note: 'g3',
      duration: 125,
      rest: 125
    },
    {
      note: 'g3',
      duration: 125,
      rest: 125
    },
    {
      note: 'g3',
      duration: 125,
      rest: 0
    },
    {
      note: 'c4',
      duration: 250,
    },
    {
      note: 'e4',
      duration: 250,
    },
    {
      note: 'g4',
      duration: 250,
    },
    {
      note: 'e4',
      duration: 125,
    },
    {
      note: 'c4',
      duration: 375,
    },
    {
      note: 'e4',
      duration: 250,
    },
    {
      note: 'g4',
      duration: 250,
    },
    {
      note: 'e4',
      duration: 250,
    },
    {
      note: 'b3',
      duration: 250,
    },
    {
      note: 'd4',
      duration: 250,
    },
    {
      note: 'f4',
      duration: 250,
    },
    {
      note: 'd4',
      duration: 125,
    },
    {
      note: 'b3',
      duration: 375,
    },
    {
      note: 'd4',
      duration: 250,
    },
    {
      note: 'f4',
      duration: 250,
    },
    {
      note: 'd4',
      duration: 250,
    },
    {
      note: 'a3',
      duration: 250,
    },
    {
      note: 'c4',
      duration: 125,
    },
    {
      note: 'e4',
      duration: 375,
    },
    {
      note: 'c4',
      duration: 250,
    },
    {
      note: 'a3',
      duration: 250,
    },
    {
      note: 'c4',
      duration: 125,
    },
    {
      note: 'e4',
      duration: 375,
    },
    {
      note: 'c4',
      duration: 250,
    },
    {
      note: 'g3',
      duration: 1000,
    }
  ];

  var tempo = 1.25;
  var playMusic = function(i) {
    if (i < music.length) {
      var n = music[i];
      var sound = sounds[n.note];
      var $key = $('#' + n.note);
      $key.addClass('hover');
      sound.play();
      setTimeout(function() {
        sound.stop();
        $key.removeClass('hover');
        var rest = n.rest || 0;
        setTimeout(function() {
          playMusic(i + 1);
        }, tempo * rest);
      }, tempo * n.duration);
    } else {
      playing = false;
      $('#play').prop('disabled', false);
    }
  }

  var playing = false;
  $('#play').on('click', function() {
    $(this).prop('disabled', true);
    if (!playing) {
      playMusic(0);
    }
  });

  $('.keyboard__key').on('mouseenter', function() {
    if (!playing) {
      var id = $(this).attr('id');
      var sound = sounds[id];
      sound.play();
      setTimeout(function() {
        sound.stop();
      }, 200);
    }
  });
});
