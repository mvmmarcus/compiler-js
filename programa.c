#include <stdio.h>
typedef char literal[256];
void main(void)
{
/*----Variaveis temporarias----*/
bool T0;
bool T1;
int T2;
int T3;
int T4;
bool T5;
int T6;
int T7;

literal A;
int B;
int D;
double C;



printf("Digite B:");
scanf("%d", &B);
printf("Digite A:");
scanf("%s", &A);
T0 = B > 2
if (T0) {
T1 = B <= 4
if (T1) {
printf("B esta entre 2 e 4");
}
}
T2 = B + 1;
B = T2;
T3 = B + 2;
B = T3;
T4 = B + 3;
B = T4;
D = B;
C = 5.0;
T5 = B < 5
while (T5) do {
T6 = B + 2;
printf("%lf", C);
T7 = B + 1;
B = T7;
T5 = B < 5;
}
printf("\nB=\n");
printf("%d", D);
printf("\n");
printf("%lf", C);
printf("\n");
printf("%s", A);
}