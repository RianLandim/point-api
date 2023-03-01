-- CreateTable
CREATE TABLE `Employer` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `jobDocument` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Employer_cpf_key`(`cpf`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_EmployerToEnterprise` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_EmployerToEnterprise_AB_unique`(`A`, `B`),
    INDEX `_EmployerToEnterprise_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_EmployerToEnterprise` ADD CONSTRAINT `_EmployerToEnterprise_A_fkey` FOREIGN KEY (`A`) REFERENCES `Employer`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_EmployerToEnterprise` ADD CONSTRAINT `_EmployerToEnterprise_B_fkey` FOREIGN KEY (`B`) REFERENCES `Enterprise`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
