class AudioManager {
  static audioArray = [];

  static audios = {};
  static volume = 0.5;

  /**
   * This Function registers a new Audio, on its class constructor. I.e. character-class swim-Audio
   * This Function sets the volume from the new Audio-Object to the preset volume of this Audio Manager. Currently 0.5
   * It pushes the Audio-object into an audio Array.
   * This Array is needed, to further garantuee individual sound-control
   *
   * @param {Audio} audio - the new Audio-object
   * @returns - returns the Audio to its parent object
   */
  static getAudio(path) {
    if (this.audios[path]) {
      return this.audios[path];
    }
    let audio = new Audio(path);
    audio.volume = sessionStorage.getItem("volume") ?? this.volume;
    this.audios[path] = audio;
    return audio;
  }

  /**
   * This Function changes the Volume, when using the range-input
   * It allows an individually sound-control by the user
   * It changes the volume of each audio-object, that was pushed into tthe audioArray
   * updateSoundPercentage is called, to give user feedback about the volume-value
   *
   * @param {*} volume - the volume-indicator
   */
  static setVolume(volume) {
    this.volume = volume;
    Object.values(this.audios).forEach((audio) => {
      audio.volume = volume;
    });
    this.updateSoundPercentage(volume);
  }

  /**
   *  This function updates the volume counter, to give the User direct feedback about the set volume
   * It's multiply by 100, for %-view
   *
   * @param {*} volume - the new Audio volume
   */
  static updateSoundPercentage(volume) {
    let counter = document.getElementById("sound-percentage");
    counter.innerHTML = `${(volume * 100).toFixed(0)}%`;
  }
}
