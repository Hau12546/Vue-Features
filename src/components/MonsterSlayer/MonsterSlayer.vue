<template>
    <header>
        <h1>Monster Slayer</h1>
    </header>
    <div class="container">
       <div class="battle-ground">
            <div class="monster">
            <img src="https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2021/02/monster-hunter-rise-rajang-01.png" alt="Monster" class="img-fluid">
            
        </div>
        <div class="health-info">
            <h3 for="">Monster</h3>
            <div class="item-container" id="monster">
                <div class="white-blood"></div>
                <div class="health" v-bind:style="MonsterBloodLoss"></div>
            </div>
            <h3 for="">Hero</h3>
            <div class="item-container" id="hero">
                <div class="white-blood"></div>
                <div class="health" v-bind:style="HeroBloodLoss"></div>
            </div>
        </div>
        <div class="hero">
            <img src="http://blog.richmond.edu/heroes/files/2015/03/Superman-is-a-Hero.jpg" alt="Hero" class="img-fluid">
        </div>
       </div>
       <div class="score-board">
           <div class="points">
               <div>Monster</div>
               <div>{{monsterWins}} Wins</div>
               <div>{{monsterLost}} Losses</div>
           </div>
           <div class="points">
               <div>{{heroLost}} Losses</div>
               <div>{{heroWins}} Wins</div>
               <div>Hero</div>
           </div>
       </div>

       <div v-show="BattleEnd" class="result">
           <h1 v-show="WinnerIdentity.length>0">{{WinnerIdentity}} is Leading</h1>
           <h3 v-show="LoserIdentity.length>0">{{LoserIdentity}} is falling behind</h3>
           <h1 v-show="WinnerIdentity.length==0 && LoserIdentity.length==0">A Draw For Both side</h1>
            <button v-on:click="Restart()" class="btn btn-primary " type="button">Start The Game</button>
       </div>
        <form action="" class="md-form" v-if="!BattleEnd">
            <div class="item-container">
                <button v-on:click="AttackMonster()" class="btn btn-primary " type="button">Attack</button>
            </div>
            <div class="item-container">
                <button :disabled="CurrentRound%3==0" v-on:click="SpecialHeroAttack()" class="btn btn-danger " type="button">Special Attack</button>
            </div>
            <div class="item-container">
                <button :disabled="CurrentRound%3==0" v-on:click="HealWounds()" class="btn btn-secondary " type="button">Health</button>
            </div>
            <div class="item-container">
                <button v-on:click="Surrender()" class="btn btn-secondary " type="button">Surrender</button>
            </div>
        </form>
        <h1>Battle Log</h1>
        <div class="battle-log">
            <ul v-show="BattleLogList.length>0" class="nav-list" v-for="(message,index) in BattleLogList" v-bind:key="index">
                <li class="list-item">{{message.opponent}} {{message.action}} {{message.result}}</li>
            </ul>
        </div>
    </div>
</template>

<style>
    .container{
        max-width: 100%;
    }
    @media screen and (max-width:70em){
        .battle-ground{
            margin-inline: auto;
            
        }
        .battle-ground>*{
            flex:1 0 100%;
        }

        
    }

    @media screen and (max-width:400px){
        .container{
            padding-inline: 1em!important;
        }
        .battle-ground>*{
            display: block;
            width: 100%!important;
        }

        .md-form{
            display: block!important;
            width: 100%;
            margin-inline: 0!important;
        }

        .md-form>*{
            display: block;
            width: 100%;
        }
        .battle-log{
            margin-inline: 0!important;
        }


    }
    .img-fluid{
        object-fit: cover;
        object-position: top left;
        width: 200px;
        min-height: 200px;
    }
    .health-info{
        display: block;
        padding-inline: 10%;
        width: 70%;
    }
    #hero, #monster{
        position: relative;
        min-height: 40px;
        padding: .5em;
    }

    .white-blood{
        background-color: #FFFF;
        position: absolute;
        width: 100%;
        height: 25px;
        z-index: 1;
    }
    .health{
        -webkit-appearance: none;
        z-index: 3;
        position: absolute;
        width: 100%;
        height: 25px;
        /* border: 3px solid rgb(35, 52, 207); */
        /* border-radius: 10px; */
        outline: none;
        background-color: rgb(216, 9, 9);
        cursor: pointer;
        /* animation: name duration timing-function delay iteration-count direction fill-mode; */
        animation: blood-lost 400ms ease-in-out;
        animation-direction: reverse;
    }

    @keyframes blood-lost{
        from{
            transform: translate(0);
        }
        to{
            transform: translate(100%);
        }
    }
    .battle-ground{
        display: flex;
        justify-content: space-between;
        align-items: stretch;
        gap: 1em;
        flex-wrap: wrap;
    }

    .md-form{
        display: grid;
        margin-inline: 30%;
        grid-template-columns: repeat(2,1fr);
        grid-template-rows: repeat(1,1fr);
        row-gap: .5em;
        column-gap: .5em;         
    }

    .battle-log{
        display: block;
        position: relative;
        height: 200px;
        overflow: auto;
        max-width: 100%;
        margin-inline: 40%;
    }

    .score-board{
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-auto-rows: repeat(1,1fr);
        column-gap: .5em;
    }

    .points{
        display: grid;
        grid-template-columns: repeat(3,1fr);
        grid-template-rows: repeat(1,1fr);
        column-gap: .2em;
    }
</style>

<script>
function GetRandomNumber(min=1,max=10){
    return (Math.random()*(max-min))+1;
}
export default {
    data(){
        return {
            monsterLife:100,
            HeroLife:100,
            CurrentRound:1,
            WinnerIdentity:'',
            LoserIdentity:'',
            heroWins:0,
            heroLost:0,
            monsterWins:0,
            monsterLost:0,
            BattleEnd:false,
            BattleLogList:[],
            BattleMessage:''
        }
    },
    methods:{
        AttackMonster(){
            this.CurrentRound+=1;
            let AttackValue = GetRandomNumber(5,12);
            this.monsterLife-=AttackValue;
            this.AddLogMessages('Hero','attack',AttackValue);
            this.AttackHero();
        },
        AttackHero(){
            let AttackValue = GetRandomNumber(6,18);
            this.AddLogMessages('Monster','attack',AttackValue);
            this.HeroLife-=AttackValue;
        },
        SpecialHeroAttack(){
            this.CurrentRound+=1;
            let AttackValue = GetRandomNumber(20,30);
            this.monsterLife-=AttackValue;
            this.AddLogMessages('Hero','attack',AttackValue);
            this.AttackHero();
        },
        HealWounds(){
            if(this.HeroLife<100){
                let HealthGain = GetRandomNumber(6,20);
                this.HeroLife+=HealthGain;
                this.AddLogMessages('Hero','heal',HealthGain);
                this.AttackHero();
            }
        },
        Surrender(){
             this.heroLost+=1;
             this.monsterWins+=1;
             this.HeroLife=0
             this.WinnerIdentity  ='Monster';
             this.LoserIdentity = 'Hero';
             this.BattleEnd = true;
        },
        Restart(){
            this.HeroLife=100;
            this.monsterLife=100;
            this.BattleLogList = [];
            this.BattleEnd = false;
        },
        AddLogMessages(who, what, value){
            this.BattleLogList.unshift({
                opponent:who,
                action:what,
                result:Math.round(value)
            });
        },
        BattleOutcome(){   
            if(this.WinnerIdentity == 'Hero'){
                this.heroWins +=1;
                this.monsterLost+=1;
                return;
            }
            
            if(this.WinnerIdentity == 'Monster'){
                this.monsterWins +=1;
                this.heroLost+=1;
                return;
            }
        },
    },
    watch:{
        HeroLife(value){
            if(value>100){
                this.HeroLife=100;
            }
            if(this.HeroLife<1){
                this.HeroLife=0;
                this.WinnerIdentity  ='Monster';
                this.LoserIdentity = 'Hero';
                this.BattleEnd = true;
                this.BattleOutcome();
            }
            
        },
        monsterLife(value){
            if(value>100){
                this.monsterLife=100;
            }
            if(this.monsterLife<1){
                this.monsterLife=0;
                this.WinnerIdentity  ='Hero';
                this.LoserIdentity = 'Monster';
                this.BattleEnd = true;
            }
            
        },
        monsterWins(){
            if(this.HeroLife<1){
                this.monsterWins = this.monsterWins+ 1;
                return;
            }
        }
    },
    computed: {
        HeroBloodLoss(){
            return {width:this.HeroLife + '%'};
        },
        MonsterBloodLoss(){
            return {width:this.monsterLife + '%'};
        }
    },
}


</script>