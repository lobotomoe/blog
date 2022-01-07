---
title: If we all... If each of us...
date: "2022-01-03T00:00:00.000Z"
description: "Some problems of our world we can solve only together. Or we can solve them much faster than alone. But how? How we can achieve it?"
---

When someone talk about global problems and how to solve them, I often hear - "if we all", "if everyone", "if each of us...", if...

But I have never heard how it is proposed to implement this "if". How is it proposed to make it so that "we are all" and that "everyone".

My life experience says that "we all" and "everyone" work well without any innovations in small groups — our family, friends, acquaintances. In general, if there is a desire, we can agree to do something together. Because we know each other and we have some level of trust, we are not nobody to each other.

## Problem comes here

**Man is weak alone.** It is obviously. For a real solution to global problems, the effort of the one family or one group of people **is not enough**. We need hundreds and thousands of people.

![Apes together strong](apes.jpg)

But **coordinating is difficult.** Especially the cordination of large groups. For many reasons.

> VISITOR: Even in my world, Simplicio, coordination isn’t as simple as everyone jumping simultaneously every time one person shouts “Jump!” For coordinated action to be successful, you need to trust the institution that says what the action should be, and a majority of people have to trust that institution, and they have to know that other people trust the institution, so that everyone expects the coordinated action to occur at the critical time, so that it makes sense for them to act too.
>
> That’s why we have policy prediction markets and… there doesn’t seem to be a word in your language for the timed-collective-action-threshold-conditional-commitment… hold on, this cultural translator isn’t making any sense. “Kickstarter”? You have the key concept, but you use it mainly for making video games?

## Attempt 1. We need to start somewhere.

![Organize!](organize.jpg)

So let's just take the mentioned coordination requirements (look real, yeah?) and try to think about how to implement this from scratch (is in possiblt at all?)

1. Need to have institution that says what the action should be
2. Majority of people trust that institution
3. They know that other people trust the institution
4. Everyone expects the coordinated action to occur at the critical time

Finding institutions that want you to do something (like fund them, haha) is easy. There is no problem here. ✅

Assume that we live in a country with 100M population. Majority of people in this case is 50M+ of people.
Okaaaay, Google. How to create institution known (mind you, not even talking about trust) by 50M+ of people? ❌

P.S. Actually answer is known. See [here](https://en.wikipedia.org/wiki/List_of_most-followed_Twitter_accounts) and [here](https://en.wikipedia.org/wiki/List_of_most-subscribed_YouTube_channels) 😄

## Attempt 2. Groups with target number of participants.

We can't build institution known by majority of people of whole country. At least we can't build it alone (cooperation problem even here!) and in short time.
It is not our way and we need to think towards to more realistic conditions. Majority of people is not always majority of people of whole country of course.

Each coordination has particular purpose. We come together to achieve something. I think in most cases we no need to majority of people to achieve our goal. Just need particular number of cooperation participant.

I can imagine world where someone can create "initiative" — define goal, description, target number participants and publish it somewhere.
And it already really works — people create "events" on social networks and gather other people.

What happens? It turns out there is no problem actually? 🤔

Not so fast. If you consider that "events" closer you will see that mostly this "events" is "safe".
"Safe" is when participating in event have near zero risk (life, health, finance, legal).

What about unsafe and dangerous events?
In most cases, attempts to solve really important problems cause conflict with the authorities, corporations, police or criminals.
We need to continue our attempts and find solution for unsafe initiatives / events / actions. ❌

## Attempt 3. How to deal with unsafe actions?

The preambule of [Universal declaration of human rights](https://en.wikisource.org/wiki/Universal_Declaration_of_Human_Rights) says:

> Whereas it is essential, if man is not to be compelled to have recourse, as a **last resort**, to rebellion against tyranny and oppression, that human rights should be protected by the rule of law...

Okay. But what is relation between unsafe actions and this quote from UDHR? Answer is highlighed "last resort".

**The rebels have nothing to lose. The rioters are no longer afraid of anything.**

Unsafe actions is not a problem for a desperate people. For angry and tired people. For people that lost everything.

![](fight_club.jpeg)

It is reason why we do not consider how to deal with unsafe actions when you nothing to lose and when you are not afraid. We considering more typical situation when you have something that you don't want to loose — family, health, money, reputation, etc.

We still can take some risk, but is much more complicated to evaluate whether it is worth the risk.
My life experience says that for involve really big number of people in something risky we need to reduce risk to near-zero level.
Inpossible? Yeah, looks like. But this is reality.

Let's try to guess how we can do this.

### Conditional participation

![Circular dependencies issue described in Thinking in promises](deadlock.png)

Conditional participation is when you promise to do something when some condition will met. For example: _I promise to help clean the beach if other 49 will promise too_. The idea looks good. Here we use [Diffusion of responsibility](https://en.wikipedia.org/wiki/Diffusion_of_responsibility) and [Bandwagon effect](https://en.wikipedia.org/wiki/Bandwagon_effect) to reduce the likelihood of punishing the participant.

Unfortunately, practice shows that it is extremely easy for people to decide not to participate in anything. I think because there is no penalty or damages for refusing to participate. Also because people don't trust to the system.

### Delegated action. Conditional funding

In this case we pay money for task executor if and only if task will be completed.

Delegated action scenario can be like this.

1. Someone create the task, where describe task, define reward
2. Unlimited "sponsors" can fund this task
3. When task's reward amount reached, task can be taken in work by some "executor".
4. If executor mark task as ready in the game coming "validators".
5. Validators must confirm that task is really completed and completed sufficiently or not.
6. If confirmation is received, the executor can collect the reward.

Ok, let me draw it:

![](delegated_action.png)

This flow very simplified, but descibed key concept.
Problem is how to do validation right way and make it reliable? How to protect sponsors and the executor from fraud?
Currently I don't know how to make it possible.

## Byzantine generals problem

Both methods that I described above have a common problem — people can lie, people can do something that doesn't correspond to what they said, declaration of intent may not correspond to actual actions. In general, **people can producing unwanted results (to lie, intentionally or not; failure to fulfill a promise) which are making a group unable to reach an agreement**

That problem known as "Byzantine generals problem".

> We imagine that several divisions of the Byzantine army are camped outside an enemy city, each division commanded by its own general. The generals can communicate with one another only by messenger. After observing the enemy, they must decide upon a common plan of action. However, some of the generals may be traitors, trying to prevent the loyal generals from reaching agreement.

Also generals use courier for communication. Courier can be captured by the enemy, betray, deliver wrong messsage or just lost it. In general, there is no reliable communication channel between the generals.

![](byzantine_generals_problem.png)

If you try to google this you will see that almost in all cases Byzantine generals problem considering in blockchain context. In context of computer science.
And all the proposals for a solution are based on the thesis where the general is not a person, but a computer.

In my opinion, this is a big omission. Even if we imagine that in the future we will implant communication chip into our brains, we are still not protected from "nature-of-the-human". If we can force computers to following the protocol, is there at least one way to make sure that people follow the protocol?

## References

1. [Coordination, good and bad. Vitalik Buterin](https://vitalik.ca/general/2020/09/11/coordination.html)
2. [Inadequate Equilibria. Eliezer Yudkowsky](https://equilibriabook.com/molochs-toolbox/)
3. [Thinking in Promises: Designing Systems for Cooperation. Mark Burgess](https://www.oreilly.com/library/view/thinking-in-promises/9781491917862/ch04.html)
4. [Thee Byzantine Generals Problem. Leslie Lamport, Robert Shostak, and Marshall Pease](https://lamport.azurewebsites.net/pubs/byz.pdf)
