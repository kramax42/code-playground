// Program that takes data from process zero and sends it to all of the other
// processes by sending it in a ring. That is, process i should receive
// the data and send it to process i + 1, until the last process is reached.
// https://www.mcs.anl.gov/research/projects/mpi/tutorial/mpiexmpl/src/ring/C/main.html

#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include "mpi.h"

int main(int argc, char** argv) {
	int rank;
	int value;
	int n_procs;
	MPI_Status status;

	MPI_Init(&argc, &argv);

	MPI_Comm_rank(MPI_COMM_WORLD, &rank);
	MPI_Comm_size(MPI_COMM_WORLD, &n_procs);
	do {
		if (rank == 0) {
			// Enter value to send (0 to stop)
			scanf("%d", &value);
			MPI_Send(&value, 1, MPI_INT, rank + 1, 0, MPI_COMM_WORLD);
		}
		else {
			MPI_Recv(&value, 1, MPI_INT, rank - 1, 0, MPI_COMM_WORLD, &status);
			if (rank < n_procs - 1) {
				MPI_Send(&value, 1, MPI_INT, rank + 1, 0, MPI_COMM_WORLD);
			}
		}
		printf("Process %d got %d\n", rank, value);
		fflush(stdout);
	} while (value > 0);

	MPI_Finalize();
	return 0;
}

// Input: 4
// Process 0 got 4
// Process 1 got 4
// Process 2 got 4
// Process 3 got 4
// Input: 6
// Process 0 got 6
// Process 1 got 6
// Process 2 got 6
// Process 3 got 6
// Input: 77
// Process 0 got 77
// Process 1 got 77
// Process 2 got 77
// Process 3 got 77
// Input: 0
// Process 0 got 0
// Process 1 got 0
// Process 2 got 0
// Process 3 got 0
