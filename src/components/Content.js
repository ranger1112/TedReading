import Mark from "./Mark";
import ArticleRow from "./ArticleRow";

const articleRows = [
    {
        "text": (
            <>
                This elephant has incredible strength. She can <Mark content="uproot" description="v.连根拔起"></Mark> a tree with her <Mark content="trunk" description="n.树干；象鼻"></Mark> alone. Yet she will remain in <Mark content="captivity" description="n.囚禁；困住"></Mark>, held by only a light rope. Despite her ability to easily <Mark content="break away" description="挣脱" type="phrase"></Mark>, she doesn't even try. Why?
            </>
        ),
        "translation": (
            <>
                这只大象有很不可思议的力气，它只用象鼻就能把树连根拔起。但它却仍然被一条细绳给囚禁着。尽管它有能力可以轻易挣脱，它却试也不试。为什么?
            </>
        ),
        "items": [
            {
                "content": "uproot",
                "description": "连根拔起",
                "type": "word"
            },
            {
                "content": "trunk",
                "description": "树干；象鼻",
                "type": "word"
            },
            {
                "content": "captivity",
                "description": "囚禁；困住",
                "type": "word"
            },
            {
                "content": "break away",
                "description": "挣脱",
                "type": "phrase"
            }
        ]
    },
    {
        "text": (
            <>
                It starts when she is young. She is first tied down when she is small and not yet strong enough to break the rope. She'll try at first, try as hard as she can to break free, and try and try, but eventually realize she can't. Suddenly, something <Mark content="attaches itself" description="attach A to B(将A附加到B)" type="phrase"></Mark> to her that is stronger than any rope or chain or <Mark content="fence" description="n.栅栏；障碍物"></Mark>. It's the belief that she can't break free. It's this belief that holds her back - despite her ability.
            </>
        ),
        "translation": (
            <>
                这要从它年轻时说起。它很小时就被绑住，当时的力气还不足以扯断绳子。一开始它会尝试，尽力去挣脱，一试再试，最终，它了解到自己办不到。突然间，某种比绳子、铁链、栅栏都还要强的 东西跟它紧系在一起了。就是相信自己无法挣脱的执念。是这种执念限制了它-- 尽管它有能力。
            </>
        ),
        "items": [
            {
                "content": "attach A to B",
                "description": "将A附加到B",
                "type": "phrase"
            },
            {
                "content": "fence",
                "description": "n.栅栏；障碍物",
                "type": "word"
            }
        ]
    },
    {
        "text": (
            <>
                I've had these same beliefs - you may have too - beliefs that held me back, beliefs that led me to feel <Mark content="unfulfilled" description="adj.壮志未酬的；不满足的"></Mark> in my work, to struggle in my relationships and to live a life that was far from the one I am living now.
            </>
        ),
        "translation": (
            <>
                我也有类似的执念--你们可能也有--这些执念限制了我，这些执念让我在工作上不得志，在人际关系中挣扎，且过着和现在相去甚远的生活。
            </>
        ),
        "items": [
            {
                "content": "unfulfilled",
                "description": "adj.壮志未酬的；不满足的",
                "type": "word"
            }
        ]
    },
    {
        "text": (
            <>
                It was only when I became aware of my ropes and actively <Mark content="pulled against" description="对抗" type="phrase"></Mark> them that I found myself in a different reality. How do you break the ropes that tie you down? Don't believe everything you think.
            </>
        ),
        "translation": (
            <>
                直到我意识到束缚我的那些绳子，并主动去对抗它们，我才发现了一个不同的现实。你要如何挣脱绑住你的绳子?别尽信你所有的想法。
            </>
        ),
        "items": [
            {
                "content": "pulled against",
                "description": "对抗",
                "type": "phrase"
            }
        ]
    },
    {
        "text": (
            <>
                When I was six years old, I had a favorite <Mark content="baby sitter" description="保姆" type="phrase"></Mark>, Amber. One morning, my mother told me we couldn't have her babysit because she didn't have enough money to pay her. So that afternoon, I started my first company. I gathered rocks from around the neighborhood, painted them with my art set, and went <Mark content="door to door" description="挨家挨户" type="phrase"></Mark>, selling them to our neighbors. That night, it was Amber and I on the couch together.
            </>
        ),
        "translation": (
            <>
                我六岁时，我最爱的褓姆是安柏。有一天早上，我母亲告诉我，我们不能再让她当褓姆了，因为我母亲没有足够的钱请她。那天下午，我成立了我的第一间公司。我从住家附近收集石头，用我的彩色做彩绘，接着，挨家挨户拜访，将它们销售给邻居。那晚，我如和安柏一起坐在沙发上。
            </>
        ),
        "items": [
            {
                "content": "baby sitter",
                "description": "保姆",
                "type": "phrase"
            },
            {
                "content": "door to door",
                "description": "挨家挨户",
                "type": "phrase"
            }
        ]
    },
    {
        "text": (
            <>
                When I was young, I was bold, outgoing and fearless. I wore what I wanted (Laughter) or didn't want to wear, (Laughter) guided by my own voice that told me what would make me happy. I was also in love. His name was Fernando, and he was wonderful. As with everything else, I wasn't afraid to grab him with both hands. (Laughter) As I grew older, this picture started to fade. My <Mark content="exuberance" description="n.活力勃发"></Mark> was replaced with <Mark content="timidness" description="n.胆怯"></Mark>, my leadership with <Mark content="conformity" description="n.遵从；一致性"></Mark>, my boldness with fear.
            </>
        ),
        "translation": (
            <>
                我小时候很大胆、外向、无惧。我想穿什么就穿什么，或者不想穿上任何衣服，听从内心的声音去做让自己快乐的事。我也恋爱了。他的名字叫佛南多，他很棒。外向大胆如故，我不怕用双手搂抱他随着我长大，这个画面开始淡去。我的热情活力被胆怯取代，我的领导能力被顺从取代，我的大胆被恐惧取代。
            </>
        ),
        "items": [
            {
                "content": "exuberance",
                "description": "n.活力勃发",
                "type": "word"
            },
            {
                "content": "timidness",
                "description": "n.胆怯",
                "type": "word"
            },
            {
                "content": "conformity",
                "description": "n.遵从；一致性",
                "type": "word"
            }
        ]
    },
    {
        "text": (
            <>
                I don't think any of us leave childhood without some ropes despite our parents' best intentions. I grew up with a mother who was determined to give me the perfect life. Armed with love and good intentions, she did everything for me to help me be perfect. I'd pack a <Mark content="suitcase" description="n.行李箱"></Mark> to go on a school trip, and she'd unpack it and repack it in a more perfect way. I'd be ready to turn in a school art project, and then she'd add her own <Mark content="brush strokes" description="笔触；画笔描边"></Mark> to make it better.
            </>
        ),
        "translation": (
            <>
                尽管我们父母出于善意，我想大家或多或少都还是带着一些绳子长大。成长过程中，母亲决心要给我一个完美的人生。带着爱和好意，她为了帮我达到完美，什么都做了。为了学校旅行，我打包了一个行李箱，而她会把东西都拿出来，再重新打包得更完美。我准备好要交一篇学校的美术作品，她会帮我加上几笔让作品变更好。
            </>
        ),
        "items": [
            {
                "content": "suitcase",
                "description": "n.行李箱",
                "type": "word"
            },
            {
                "content": "brush strokes",
                "description": "笔触；画笔描边",
                "type": "phrase"
            }
        ]
    },
    {
        "text": (
            <>
                Later she told me when my choice of boyfriend or apartment wasn't good enough. Although she just wanted what was best for me, I stopped knowing what was best for me. An unconscious rope was formed. I shouldn't trust my own voice and my own ability, and I feared not being perfect. Other ropes attached themselves too. I grew up in a family filled with <Mark content="yelling" description="n.吼叫"></Mark>, loud voices and strong opinions. To keep the peace, I learned to stay quiet, to not <Mark content="rock the boat" description="捣乱" type="phrase"></Mark>, to become invisible. In school, I came to believe it's more important to <Mark content="blend in" description="融入" type="phrase"></Mark> than stand out. And the pain of an early heartbreak led me to hold back in my relationships so I could avoid getting hurt. I'm not good enough. Don't speak up. Don't stand out.
            </>
        ),
        "translation": (
            <>
                之后她告诉我，我选男友或公寓的品味不够好。虽然她只是想要给我最好的，我却不再知道什么才是对我最好的。一条无意识的绳子形成了。我不应该相信我自己的 声音、我自己的能力，我害怕无法做到完美。其他绳子也相继出现了。我在充满了吼叫、大声说话、表达强烈意见的家庭中成长。为了保持和平，我学会不作声，不要惹事生非，变成隐形人。在学校，我渐渐相信，融入比突出更重要早期尝到心碎的痛苦，让我在谈恋爱时有所保留，才能避免受伤。我不够好。不要畅所欲言。不要突显自己。
            </>
        ),
        "items": [
            {
                "content": "yelling",
                "description": "n.吼叫",
                "type": "word"
            },
            {
                "content": "rock the boat",
                "description": "捣乱",
                "type": "phrase"
            },
            {
                "content": "blend in",
                "description": "融入",
                "type": "phrase"
            }
        ]
    },
    {
        "text": (
            <>
                Fear failure. These were my ropes. This isn't just my story. Like the elephant, we all come to believe certain things in childhood that weren't true - or at least are no longer true. But we still live with them as if they are. If you've ever felt not good enough, alone, unwanted, unloved, invisible, powerless, like you don't belong - these are your ropes. If you've ever felt you can't trust yourself, trust others, speak up, stand out, ask for help, let others in, be accepted as you are - these are your ropes.
            </>
        ),
        "translation": (
            <>
                害怕失败。这些是我的绳子。这不只是我的故事。就像那只大象，在童年我们都渐渐相信某些事，但那些事并非真的--或至少不再是真的。但我们仍把它们当真在过日子。如果你曾经觉得自己不够好、孤单、没有人要、没有人爱、不被看见、无能力、没有归属感--这些就是你的绳子。如果你曾经觉得你无法相信自己、相信别人、勇于发声、表现自己、寻求协助、让他人进来、让真正的自己被接受--这些是你的绳子。
            </>
        ),
        "items": []
    },
    {
        "text": (
            <>
                These ropes hold us back. I found myself defaulting to others' opinions when I should have been trusting my own, staying quiet when it would have benefited me to speak up, and blending in when I would have been happier if I had to courage to stand out. This led me into a series of jobs that ranged from tolerable to miserable. In one, I hoped I'd get sick so I could stay home from work. It led me into a series of relationships in which I lacked confidence in myself, the other person and the relationship. These never worked out. My beliefs affected the way I perceived the world, which changed how I acted, which led to a self-fulfilling prophecy. I felt small, and my world became smaller.
            </>
        ),
        "translation": (
            <>
                这些绳子会限制住我们。当我应该相信我自己的意见时，我却顺从他人的意见;发表意见会对自己较有益时，我却保持沉默;有勇气站出来我其实会更快乐时，我却选择了融入。这导致一连串我做过的工作，从可容忍的到很糟糕的都有。其中一份工作，我希望自己能生病请假，这样就不用去上班。这也导致我陷入一连串无法信任自己、对方 以及这段关系的困境中。这些关系都无法成功。我的执念影响我看世界的角度，这就会改变我的行为，导致了自证预言。我觉得自己很渺小，我的世界就越变越小了。
            </>
        ),
        "items": []
    },
    {
        "text": (
            <>
                What we believe has powerful effects. Decades of social psychology research backs this up. In a study performed at Dartmouth College, an ugly scar was placed on participants' faces with makeup. They were then sent into a room for a conversation and asked to report how people responded to them with this ugly scar. But here is the twist. Right before they left, the experimenter said, "Hold on a minute! We just want to touch up your scar a bit." Rather than touch it up, they removed it entirely.
            </>
        ),
        "translation": (
            <>
                我们的信念有很强大的影响力。有数十年的社会心理学研究可以证明。在达特茅斯学院进行的一项研究用化妆的方式在受试者的脸上加上一道丑陋的疤痕。接着，送他们到房间去与人交谈，并要求他们回报别人对这丑陋疤痕有什么反应。但，有个小花样。在他们离开化妆室前，实验者说:「等一下!我们想要修饰一下你的疤痕。」但他们并不是修饰，而是把疤痕完全拿掉。
            </>
        ),
        "items": []
    },
    {
        "text": (
            <>
                So unbeknownst to them, the participants went into their conversations, looking completely normal. Despite this, they came back and reported how awkward their conversations were, how people avoided looking at their scar, had trouble making eye contact, and were tense and uncomfortable in the conversation. Their beliefs about their scar led them to see things that weren't really there and to make meaning of innocent behavior. What could have been a perfectly normal conversation instead became an awkward one. Their beliefs created their reality. Other studies show the same effect.
            </>
        ),
        "translation": (
            <>
                受试者并不知道，接着便去参与交谈，外表看起来完全正常。尽管如此，他们回来时仍然回报了他们的谈话有多尴尬，对方如何避免看着他们的疤痕，眼神交流有障碍，在交谈中很紧绷、不舒服。他们相信自己有疤的执念，让他们看见这些根本不存在的事，替对方单纯的行为强赋予意义。本应是完全正常的交谈，却变得很尬。他们的执念造出他们的真实。其他研究也证明了同样的影响。
            </>
        ),
        "items": []
    },
    {
        "text": (
            <>
                Highlight an Asian woman's Asian identity before a math test, she'll perform better. Highlight her female identity, she'll perform worse. Lead a group of men to believe an athletic task is diagnostic of sports intelligence, white men perform better. Lead them to believe it'd diagnostic of natural athletic ability, black men do. Give someone a white coat and tell them it's a doctor's lab coat, they'll perform better on an attention task than when told it's a painter's coat. In all of these cases, same people, same abilities, same tasks - different beliefs.
            </>
        ),
        "translation": (
            <>
                在亚洲女子参与数学测验之前就强调出她的亚洲身分，会让她表现更佳。若强调她的女性身分，会让她表现变差。引导一群男性相信一项体育任务的表现可判断其运动智慧的话，白人的表现会较佳。引导他们相信这项任务可判断其天生的体育能力，则黑人的表现会较佳。给某个人一件白色大衣并告诉他这是医生的白袍，他们在注意力任务的表现会比说它是画家的画袍时更佳。在所有这些例子中，都是同样的人、同样的能力、同样的任务--不同的信念。
            </>
        ),
        "items": []
    },
    {
        "text": (
            <>
                And in each case, it was their belief that raised or lowered their performance. How you see yourself and your circumstances will affect what you see, how you act, and what occurs as a result. It's almost as if our beliefs place a virtual reality headset on us, (Laughter) a headset that allows us to see things that aren't really there and sends us into a false reality. We have these headsets even when they're miles from the truth. I remember hearing the top model Cameron Russell share how models, despite having the shiniest hair and the longest legs, are some of the most physically insecure people on the planet.
            </>
        ),
        "translation": (
            <>
                在每个例子中，都是他们的信念在提升或降低他们的表现。你如何看待自己以及你的境况，会影响你的所见、所为，以及产生的结果。就好像我们的信念会帮我们戴上一副虚拟实境的头戴眼镜，这眼镜会让我们看到不存在的东西，带我们进入虚假的现实中。尽管和真相差了十万八千里，我们依然带着这些眼镜。我记得曾听过顶尖模特儿卡麦隆·罗素分享，她说尽管模特儿有最闪亮的头发和最长的腿，她们却是地球上对身体最没安全感的人。
            </>
        ),
        "items": []
    },
    {
        "text": (
            <>
                And award-winning author Lidia Yuknavitch shared how she didn't follow up on the literary representation she was offered early in her career. The reason in her words: "We don't always know how to hope or say yes or choose the big thing, even when it's right in front of us. It's the shame we carry. The shame of not believing we deserve it."
            </>
        ),
        "translation": (
            <>
                得奖作家莉迪亚·约克娜薇琪分享了她在职涯初期未能把握住别人给她的一个文学表现机会。引述她的话，理由是:「我们不见得知道要如何去期望、答应或者选择这个大好机会，即使它就在我们眼前。是因为我们自惭形秽。觉得自己不值得拥有它。
            </>
        ),
        "items": []
    },
]

const articleRowsHtml = articleRows.map((item, key) => {
    return ArticleRow({key: key, text: item.text, translation: item.translation, items: item.items})
})

export default function Content() {
    return (
        <>
            <div className="grid grid-cols-6 gap-4">
                <div className="col-start-2 col-span-4 ...">
                    <h1 className="text-3xl my-1 font-bold text-gray-800">Don't believe everything you think</h1>
                    <div className="text-xl my-1 font-bold text-gray-600">那些限制你的执念是你的不幸之源</div>
                    <div className="text-sm text-gray-600 mt-2 pb-1 border-b border-gray-300">
                        <span className="mr-5 hover:text-gray-900 hover:cursor-pointer">Lauren Weinstin</span>
                        <span className="hover:text-blue-400 hover:cursor-pointer">
                         <a href="https://www.ted.com/talks/lauren_weinstein_don_t_believe_everything_you_think">阅读原文</a>
                     </span>
                    </div>
                </div>
                {articleRowsHtml}
            </div>
        </>
    )
}