<template>
    <header class="mdl-layout__header mdl-layout__header--scroll mdl-color--primary">
        <div class="mdl-layout--large-screen-only mdl-layout__header-row">
        </div>
        <div class="mdl-layout--large-screen-only mdl-layout__header-row">
            <h3>{{ appName}}</h3>
        </div>
        <div class="mdl-layout--large-screen-only mdl-layout__header-row">
        </div>
        <div class="mdl-layout__tab-bar mdl-js-ripple-effect mdl-color--primary-dark">
            <template v-for="menu in menus">
                <a v-bind:href="menu.link" class="mdl-layout__tab">{{ menu.title }}</a>
            </template>
            <button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored mdl-shadow--4dp mdl-color--accent" id="add">
            <i class="material-icons" role="presentation">add</i>
                <span class="visuallyhidden">Add</span>
            </button>
        </div>
    </header>
</template>
<script>
// is-active
export default {
  data: function() {
    return {
      appName: 'MDLvue',
      menus: [
          {title: 'Overview', link: '#overview'},
          {title: 'Feature', link: '#feature'},
          {title: 'Details', link: '#details'},
          {title: 'Technology', link: '#technology'},
          {title: 'FAQ', link: '#faq'},
      ],
      active: true
    }
  }
}
</script>

<style>

</style>
