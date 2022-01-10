---
title: If we all... If each of us...
date: "2022-01-03T00:00:00.000Z"
description: "Some problems in our world can only be solved together. Or it can be solved much faster together. But how can we achieve it?"
---

When someone talks about global problems and how to solve them, I often hear - "if we all", "if everyone", "if each of us...", if...

But I've never heard how it's supposed to implement this "if". Nobody says how are we supposed to make that happen.

In my experience, "we all" and "everyone" notion works well without any innovations only in small groups — like our family, friends, acquaintances. In general, if there is a desire, we can all agree to do something together. That's because we know each other and we have a high level of trust, we're not nobody to each other.

## Problem comes here

**Man is weak alone.** Obviously. For a real solution to global problems, the effort of one family or one group of people **is not enough**. We need hundreds and thousands of people.

![Apes together strong](apes.jpg)

But **coordination is difficult.** Especially the cordination of a large group of people who are unfamiliar with each other, for many reasons.

Eliezer Yudkowsky says:

> VISITOR: Even in my world, Simplicio, coordination isn’t as simple as everyone jumping simultaneously every time one person shouts “Jump!” For coordinated action to be successful, you need to trust the institution that says what the action should be, and a majority of people have to trust that institution, and they have to know that other people trust the institution, so that everyone expects the coordinated action to occur at the critical time, so that it makes sense for them to act too.
>
> That’s why we have policy prediction markets and… there doesn’t seem to be a word in your language for the timed-collective-action-threshold-conditional-commitment… hold on, this cultural translator isn’t making any sense. “Kickstarter”? You have the key concept, but you use it mainly for making video games?

## We need to start somewhere.

![Organize!](organize.jpg)

So let's just take the mentioned coordination requirements (looks realistic, right?) and try to think of how to implement this from scratch (is it possible at all?).

1. We should have an institution that dictates the actions;
2. Majority of people should trust that institution;
3. They should know that other people trust the institution;
4. Everyone would expect the coordinated action to occur at the critical time.

Finding institutions that want you to do something (like fund them, haha) is easy. There is no problem here. ✅

Let's check next. "Majority of people". Majority of people where? In the countrly? In the city? In the some community?
Let's try the country. Assume that we live in a country with 100M population. Majority of people in this case is 50M+ of people.
Okaaaay, Google. How to create an institution known by 50M+ of people? Mind you, we're not even talking about trust. ❌

P.S. Actually there is an answer. Check [this](https://en.wikipedia.org/wiki/List_of_most-followed_Twitter_accounts) and [this](https://en.wikipedia.org/wiki/List_of_most-subscribed_YouTube_channels) 😄

## Groups with target number of participants.

We can't build an institution known by majority of people in the whole country. At least we can't build it alone (cooperation problem is even there!) and in short time.
We need to think towards the more realistic conditions.

People coordinate for a particular reason. We come together to achieve something. I think in most cases we don't need a majority of people to achieve our goal. We just need a particular number of cooperating participants.

I can imagine a world where someone can create an "initiative" — define goal, description, target number of participants and publish it somewhere.
And it already does — people create "events" on social networks to gather other people.

So, looks like there's actually no problem at all? 🤔

Not so fast. If you examine that "events" closely you will see that most of these "events" are "safe".
"Safe" is when participating in event have near zero risk (life, health, finance, legal).

But what about unsafe and dangerous events?
In most cases, attempts to solve some really important problems can cause conflict with the authorities, corporations, police or criminals.
We need to continue our attempts and find a solution for "unsafe" initiatives / events / actions. ❌

## How to deal with unsafe actions?

The preambule of [Universal declaration of human rights](https://en.wikisource.org/wiki/Universal_Declaration_of_Human_Rights) says:

> Whereas it is essential, if man is not to be compelled to have recourse, as a **last resort**, to rebellion against tyranny and oppression, that human rights should be protected by the rule of law...

Okay, but what is the relation between unsafe actions and this quote from UDHR? The answer is highlighed in "last resort".

**The rebels have nothing to lose. The rioters are no longer afraid of anything.**

Unsafe actions is not a problem for desperate people. For angry and tired people. For people who lost everything.

![](fight_club.jpeg)

It is the reason why we don't consider how to deal with unsafe actions when you've got nothing to lose and when you're not afraid. We are considering more typical situation when you have something that you don't want to lose — family, health, money, reputation, etc.

We can still take some risk, but it's much more complicated to evaluate whether is it worth the risk or not.
My experience says that to involve a really big number of people in something risky we need to reduce that risk to a near-zero level.
Inpossible? Yeah, looks like it is. But this is reality.

Let's try to guess how we can achieve this.

### Conditional participation

![Circular dependencies issue described in Thinking in promises](deadlock.png)

Conditional participation is when you promise to do something when some condition is met. For example: _I promise to help clean the beach if other 49 will promise too_. The idea looks good. Here we use [Diffusion of responsibility](https://en.wikipedia.org/wiki/Diffusion_of_responsibility) and [Bandwagon effect](https://en.wikipedia.org/wiki/Bandwagon_effect) to reduce the likelihood of punishing the participant.

![](conditional_actions.png)

Unfortunately, practice shows that it is extremely easy for people to decide not to participate in anything. I think that's because there is no penalty or damage for refusing to participate. Also because people don't really trust the system.

### Delegated action. Conditional funding

In this case we pay money to a task executor if and only if the task will be completed.

Delegated action scenario may look like this.

1. Someone creates the task, describes the task and defines the reward;
2. Unlimited "sponsors" can fund this task;
3. When tasks reward amount is reached, task can then be taken in work by some "executor";
4. If executor mark this task as ready, "validators" enters the game;
5. Validators must confirm that the task is actually completed and it's completed sufficiently;
6. If confirmation is received, the executor can collect the reward.

Ok, let me draw it:

![](delegated_action.png)

This flow is very simplified, but it descibes the key concept.
The problem is that we need to do validation the right way and make it reliable. How to protect sponsors and the executor from fraud?
Currently I don't know how to make it possible.

## Byzantine generals problem (BGP)

Both methods that I described above have a common problem — people can lie, people can do something that doesn't correspond to what they said, declaration of intent may not correspond to actual actions. In general, **people can produce unwanted results (they may lie, intentionally or not, or fail to fulfill a promise) which are making a group unable to reach an agreement**

This problem is known as "Byzantine generals problem".

> We imagine that several divisions of the Byzantine army are camped outside an enemy city, each division commanded by its own general. The generals can communicate with one another only by messenger. After observing the enemy, they must decide upon a common plan of action. However, some of the generals may be traitors, trying to prevent the loyal generals from reaching agreement.

Generals use couriers for communication. Courier can be captured by the enemy, betray, deliver wrong messsage or just lose it. In general, there is no reliable communication channel between the generals.

![](byzantine_generals_problem.png)

The problem is how to reach an agreement in such conditions (you can't trust anyone).

If you try to google this you will see that almost in all cases BGP solutions are considered in blockchain context, in context of computer science.
And all the proposals for a solution are based on the thesis where the general is not a human, but a computer.

Ok, we can force computers to follow the some protocol (ordered instructions). What about humans? We can't convert people to computers (as we know them). Even if we imagine that in the future we will implant a communication chip into our brains, we are still not protected from our "human nature".

Do you know at least one way to "force" people follow the protocol?

# Human nature

> What? A human nature? I can feel the unscientific smell!

Of course I mean the biological human specification and I'm not talking about the chakras, astral body, aura or anything like this.

Douglas Hofstadter says:

> When we humans think, we certainly do change our own mental rules, and we change the rules that change the rules, and on and on-but these are, so to speak, "software rules". However, the rules at bottom do not change. Neurons run in the same simple way the whole time. You can't "think" your neurons into running some nonneural way, although you can make your mind change style or subject of thought. Like Achilles in the Prelude, Ant Fugue, you have access to your thoughts but not to your neurons. Software rules on various levels can change; hardware rules cannot-in fact, to their rigidity is due the software's flexibility! Not a paradox at all, but a fundamental, simple fact about the mechanisms of intelligence.

We should find a way to use our "hardware" for protocol execution. Because our "hardware" works the same way regardless of our beliefs ("software") about god existance, ideas about what a man or a woman should be like, how to live properly, which programming language is better, which is better–iOS or Android–and many other "software" things.

# Summary

- Coordination is diffucult. Much more difficult than I can describe in this article.
- To solve the "big problem" we don't always need the majority of people.
- Solution of a "big problem" often requires big risk.
- Most people are not ready to take this big risk.
- To reduce the risk to a near-zero level we must solve the Byzantine generals problem (how to reach an agreement without trust).
- We should find a way to use human nature to make following the protocol possible.

## References

1. [Inadequate Equilibria. Eliezer Yudkowsky](https://equilibriabook.com/molochs-toolbox/)
2. [Thinking in Promises: Designing Systems for Cooperation. Mark Burgess](https://www.oreilly.com/library/view/thinking-in-promises/9781491917862/ch04.html)
3. [Thee Byzantine Generals Problem. Leslie Lamport, Robert Shostak, and Marshall Pease](https://lamport.azurewebsites.net/pubs/byz.pdf)
4. Gödel, Escher, Bach: An Eternal Golden Braid. Strange Loops, Or Tangled Hierarchies. Douglas R. Hofstadter
5. [Coordination, good and bad. Vitalik Buterin](https://vitalik.ca/general/2020/09/11/coordination.html)
