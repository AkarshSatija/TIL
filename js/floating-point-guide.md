# Why don’t my numbers add up properly?

So you’ve written some absurdly simple code, say for example:

	0.1 + 0.2
and got a really unexpected result:

	0.30000000000000004

#### So Why don’t my numbers, like 0.1 + 0.2 add up to a nice round 0.3, and instead I get a weird result like 0.30000000000000004?
----

Answer is simple, Because internally, computers use a format (binary floating-point) that cannot accurately represent a number like 0.1, 0.2 or 0.3 at all.
When the code is compiled or interpreted, your “0.1” is already rounded to the nearest number in that format, which results in a small rounding error even before the calculation happens.


Comparing with a real life example,

Decimal numbers cannot accurately represent a number like 1/3, so you have to round to something like 0.33 - 
and you don’t expect 0.33 + 0.33 + 0.33 to add up to 1, either - do you?

That's why, Computers use binary numbers because they’re faster at dealing with those, and because for most calculations, 
a tiny error in the 17th decimal place doesn’t matter at all since the numbers you work with aren’t round (or that precise) anyway.



Ref: http://floating-point-gui.de/basic/
