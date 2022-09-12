var n1, n2, n3, maior, n4

n1 = 5
n2 = 3
n3 = 88

if (n1 >= n2 && n1 >= n3)
{
    maior = n1
}
else if (n2 >= n1 && n2 >= n3)
{
    maior = n2
}
else 
{
    maior = n3
}

if (n1 > n2)
{
    n4 = n2
    n2 = n1
    n1 = n4
}
if (n1 > n3)
{
    n4 = n3
    n3 = n1
    n1 = n4
}
if (n2 > n3)
{
    n4 = n3
    n3 = n2
    n2 = n4
}


console.log(n1, n2, n3)