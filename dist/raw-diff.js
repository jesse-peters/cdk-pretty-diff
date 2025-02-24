"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRawDiff = void 0;
const cdk_reverse_engineered_1 = require("./cdk-reverse-engineered");
const getRawDiff = async () => {
    const cdkToolkit = await (0, cdk_reverse_engineered_1.bootstrapCdkToolkit)();
    return cdkToolkit.getDiffObject({
        stackNames: [],
    });
};
exports.getRawDiff = getRawDiff;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF3LWRpZmYuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvcmF3LWRpZmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EscUVBQStEO0FBRXhELE1BQU0sVUFBVSxHQUFHLEtBQUssSUFBNkIsRUFBRTtJQUM1RCxNQUFNLFVBQVUsR0FBRyxNQUFNLElBQUEsNENBQW1CLEdBQUUsQ0FBQztJQUMvQyxPQUFPLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFDOUIsVUFBVSxFQUFFLEVBQUU7S0FDZixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFMVyxRQUFBLFVBQVUsY0FLckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGFja1Jhd0RpZmYgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IGJvb3RzdHJhcENka1Rvb2xraXQgfSBmcm9tICcuL2Nkay1yZXZlcnNlLWVuZ2luZWVyZWQnO1xuXG5leHBvcnQgY29uc3QgZ2V0UmF3RGlmZiA9IGFzeW5jICgpOiBQcm9taXNlPFN0YWNrUmF3RGlmZltdPiA9PiB7XG4gIGNvbnN0IGNka1Rvb2xraXQgPSBhd2FpdCBib290c3RyYXBDZGtUb29sa2l0KCk7XG4gIHJldHVybiBjZGtUb29sa2l0LmdldERpZmZPYmplY3Qoe1xuICAgIHN0YWNrTmFtZXM6IFtdLFxuICB9KTtcbn07XG4iXX0=