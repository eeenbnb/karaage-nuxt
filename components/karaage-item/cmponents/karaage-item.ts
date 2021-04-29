import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import VueMarkdown from 'vue-markdown';

@Component({
  components: {
    'vue-markdown': VueMarkdown
  },
})
export default class CmponentsKaraageItem extends Vue {
  @Prop({type: String}) text:string = "";
  
  get getText():string{
    return this.text;
  }
}
