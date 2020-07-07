<template>
  <Page>
    <ActionBar title="The Office quotes" />
    <FlexboxLayout flexDirection="column" backgroundColor="#3c495e">
      <Button
        @tap="handlePress(audio.sounds)"
        v-for="audio in audios"
        :key="audio.id"
        >{{ audio.character }}</Button
      >
      <!-- <Image :src="image" stretch="none" /> -->
    </FlexboxLayout>
  </Page>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { TNSPlayer } from 'nativescript-audio';
// import audios from '../data/audios';

@Component({})
export default class Home extends Vue {
  @Prop() character!: string;

  msg: string = 'testee';
  sound: string = '';

  private _player: TNSPlayer;

  handlePress(sounds) {
    const randomSound = sounds[Math.floor(Math.random() * sounds.length)];

    const playerOptions = {
      audioFile: randomSound,
      loop: true,
      autoplay: false,
    };

    this._player
      .initFromUrl(playerOptions)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log('something went wrong...', err);
      });

    if (this._player.isAudioPlaying()) {
      this._player.pause();
    } else {
      this._player.play();
    }
  }

  get audios() {
    return this.$store.state.audios.all;
  }

  mounted() {
    this.$store.dispatch('fetchAudios');

    this._player = new TNSPlayer();
    const playerOptions = {
      audioFile: this.sound,
      loop: true,
      autoplay: false,
    };
  }
}
</script>

<style lang="scss" scoped>
ActionBar {
  background-color: #000;
  color: #ffffff;
  justify-content: center;
  display: flex;
}

button {
  vertical-align: center;
  text-align: center;
  font-size: 16px;
  color: #333333;
  background-color: #fff;
  text-transform: inherit;
}
</style>
